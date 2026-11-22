// Live data for StatGCMobile (/mobile). Uses the same data layer as /app
// (statgcLive), mapped into the mobile app's simple deal shape:
//   { id, brand, project, amount, cur, due, status: 'progress' | 'invoiced' | 'paid', paidOn }
//
// How the mobile stages map onto the backend (no schema changes):
// - Paid: the deal has payments and every one is fully paid (or written off).
//   paidOn is the latest receipt date.
// - Invoiced: at least one open payment's label starts with "Invoice".
// - Not invoiced: anything else. A deal with no payments yet has no due date.
// - due: the earliest due date among the deal's open payments.
// Declined and cancelled deals stay on the desktop app only.
import { loadAll, actions } from './statgcLive';
import { updateDeal } from '@/data/deals';
import { createPayment, updatePayment } from '@/data/payments';

export const INVOICE = 'Invoice';
const PAYMENT = 'Payment';
const PREFIX = INVOICE + ' · ';

type Pay = { id: string; label: string; amount: number; dueDate: string; writtenOffAt: string; receipts: { id: string; amount: number; date: string }[]; srv: { outstanding: number; fullyPaid: boolean } };
type LiveDeal = { id: string; brandId: string; project: string; currency: string; amount: number; dates: Record<string, string>; payments: Pay[]; srv: { status: string } };

export type MDeal = {
  id: string; brandId: string; brand: string; project: string; amount: number; cur: string;
  due: string; status: 'progress' | 'invoiced' | 'paid'; paidOn: string | null; pays: Pay[];
};

const isInvoice = (label: string) => label === INVOICE || label.startsWith(PREFIX);
const toInvoice = (label: string) => (isInvoice(label) ? label : label === PAYMENT ? INVOICE : PREFIX + label);
const fromInvoice = (label: string) => (label === INVOICE ? PAYMENT : label.startsWith(PREFIX) ? label.slice(PREFIX.length) : label);

function toMobile(d: LiveDeal, brandName: string): MDeal {
  const pays = d.payments.filter(p => !p.writtenOffAt);
  const open = pays.filter(p => !p.srv.fullyPaid);
  const base = { id: d.id, brandId: d.brandId, brand: brandName, project: d.project, amount: d.amount, cur: d.currency, pays };
  if (pays.length && !open.length) {
    const dates = pays.flatMap(p => p.receipts.map(r => r.date)).sort();
    return { ...base, due: pays.map(p => p.dueDate).filter(Boolean).sort()[0] || dates[dates.length - 1] || '', status: 'paid', paidOn: dates[dates.length - 1] || null };
  }
  const due = open.map(p => p.dueDate).filter(Boolean).sort()[0] || '';
  return { ...base, due, status: open.some(p => isInvoice(p.label)) ? 'invoiced' : 'progress', paidOn: null };
}

export async function loadMobile() {
  const all = await loadAll();
  const names: Record<string, string> = {};
  const brands: Record<string, { id: string; email: string }> = {};
  for (const b of all.brands) { names[b.id] = b.name; brands[b.name] = { id: b.id, email: b.email }; }
  const deals = (all.deals as unknown as LiveDeal[])
    .filter(d => !d.dates.cancelled && !d.dates.declined && d.srv.status !== 'cancelled' && d.srv.status !== 'declined')
    .map(d => toMobile(d, names[d.brandId] ?? 'Brand'));
  return { today: all.today, profileId: all.profileId, name: all.fullName || all.email.split('@')[0] || '', email: all.email, deals, brands };
}

export const mobileActions = {
  /** New deal from the + sheet: an agreed deal with one payment for the full amount. */
  async createDeal(x: { brandId: string | null; brand: string; project: string; amount: number; cur: string; due: string; status: string }, today: string) {
    const id = await actions.saveDeal({
      id: null, brandId: x.brandId, brandName: x.brand, project: x.project, currency: x.cur, amount: x.amount,
      dates: { offerSent: '', reminded: '', agreed: today, declined: '', cancelled: '' },
    });
    await createPayment({ deal_id: id, currency: x.cur, label: x.status === 'invoiced' ? INVOICE : PAYMENT, amount: x.amount, due_date: x.due || null });
  },

  /** Moves the deal to a mobile stage. */
  async setStage(d: MDeal, stage: string, today: string) {
    if (stage === d.status) return;
    if (d.status === 'paid') {
      // Undo "paid": remove the receipts recorded on the paid date, which is what "Mark as paid" adds.
      for (const p of d.pays) for (const r of p.receipts) if (r.date === d.paidOn) await actions.deleteReceipt(r.id);
      // Fall through so the labels match the stage picked (invoiced or not invoiced).
    }
    if (stage === 'paid') {
      let open = d.pays.filter(p => !p.srv.fullyPaid);
      if (!d.pays.length) {
        const id = await createPayment({ deal_id: d.id, currency: d.cur, label: INVOICE, amount: d.amount, due_date: d.due || today });
        open = [{ id, label: INVOICE, amount: d.amount, dueDate: d.due || today, writtenOffAt: '', receipts: [], srv: { outstanding: d.amount, fullyPaid: false } }];
      }
      for (const p of open) {
        const amt = p.srv.outstanding > 0 ? p.srv.outstanding : p.amount;
        await actions.addReceipt({ paymentId: p.id, amount: amt, date: today, method: '', utr: '', file: null });
      }
      return;
    }
    const want = stage === 'invoiced';
    if (!d.pays.length) {
      if (want) await createPayment({ deal_id: d.id, currency: d.cur, label: INVOICE, amount: d.amount, due_date: d.due || null });
      return;
    }
    for (const p of d.pays) {
      if (d.status !== 'paid' && p.srv.fullyPaid) continue;
      const label = want ? toInvoice(p.label) : fromInvoice(p.label);
      if (label !== p.label) await updatePayment(p.id, { label });
    }
  },

  /** Sets the due date on the earliest open payment, or adds a payment when there is none. */
  async setDue(d: MDeal, due: string) {
    const open = d.pays.filter(p => !p.srv.fullyPaid).sort((a, b) => (a.dueDate || '9').localeCompare(b.dueDate || '9'));
    if (open.length) return updatePayment(open[0].id, { due_date: due });
    if (!d.pays.length) await createPayment({ deal_id: d.id, currency: d.cur, label: PAYMENT, amount: d.amount, due_date: due });
  },

  /** After sending an invoice: label the open payments as invoiced and set the due date. */
  async invoiced(d: MDeal, due: string) {
    const open = d.pays.filter(p => !p.srv.fullyPaid);
    if (!open.length) {
      if (!d.pays.length) await createPayment({ deal_id: d.id, currency: d.cur, label: INVOICE, amount: d.amount, due_date: due });
      return;
    }
    for (const p of open) await updatePayment(p.id, { label: toInvoice(p.label), due_date: p.dueDate && p.dueDate < due ? p.dueDate : due });
  },

  /** The backend only deletes cancelled deals, so cancel first. */
  async deleteDeal(d: MDeal, today: string) {
    await updateDeal(d.id, { cancelled_on: today });
    await actions.deleteDeal(d.id);
  },

  setBrandEmail: (brandId: string, email: string) => actions.editBrand(brandId, { email }),
  saveName: actions.saveName,
};
