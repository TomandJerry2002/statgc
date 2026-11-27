// Live data for FlowGCApp (the live dashboard only). Loads from the data layer and maps
// rows into the shapes the prototype logic already uses. Server-derived
// values (status, next action, balances) travel in `srv` and are shown
// as returned; the screen never recomputes them.
import { supabase } from '@/lib/supabase';
import { todayIn } from '@/lib/dates';
import { getMyProfile, updateFullName, updateTaxPct } from '@/data/profile';
import { listBrands, createBrand, updateBrand, deleteBrand } from '@/data/brands';
import { listDeals, listWaitingDeals, createDeal, updateDeal, deleteDeal, previewStatus, type DealInput } from '@/data/deals';
import { listPayments, createPayment, setDisputed, setWrittenOff } from '@/data/payments';
import { listReceipts, createReceipt, deleteReceipt, signedUrls, signedUrl, checkScreenshot } from '@/data/receipts';
import { moneySummary, countOwedPayments } from '@/data/money';
import { insightsSummary } from '@/data/insights';

/** Label of the payment added when a deal's price goes up after payments exist. */
export const BALANCE_LABEL = 'Balance after price change';

export type UIDates = { offerSent: string; reminded: string; agreed: string; delivered: string; invoiced: string; declined: string; cancelled: string };
/** What the price includes and the usage rights, as the deal form edits them. */
export type UITerms = { usage: string; usageEnd: string; rev: number; hooks: number };

const toDb = (t: UIDates) => ({
  offer_sent_on: t.offerSent || null,
  offer_reminded_on: t.reminded || null,
  terms_agreed_on: t.agreed || null,
  delivered_on: t.delivered || null,
  invoiced_on: t.invoiced || null,
  declined_on: t.declined || null,
  cancelled_on: t.cancelled || null,
});

export async function loadAll() {
  const [profile, session] = await Promise.all([getMyProfile(), supabase().auth.getSession()]);
  const today = todayIn(profile?.timezone);
  const [brands, deals, waiting, payments, receipts, money, insights] = await Promise.all([
    listBrands(), listDeals(), listWaitingDeals(), listPayments(), listReceipts(), moneySummary(today),
    // Insights are optional: if they fail (already logged), hide the box instead of failing the app.
    insightsSummary(today).catch(() => []),
  ]);

  const receiptsBy: Record<string, object[]> = {};
  for (const r of receipts) {
    (receiptsBy[r.payment_id] ??= []).push({ id: r.id, amount: r.amount_received, date: r.received_on, method: r.method ?? '', utr: r.utr ?? '', shot: r.screenshot_path ? { path: r.screenshot_path, name: '', url: '' } : null });
  }
  const paymentsBy: Record<string, object[]> = {};
  for (const p of payments) {
    if (!p.id || !p.deal_id) continue;
    (paymentsBy[p.deal_id] ??= []).push({
      id: p.id, label: p.label ?? '', amount: p.amount ?? 0, dueDate: p.due_date ?? '',
      disputedAt: p.disputed_on ?? '', writtenOffAt: p.written_off_on ?? '',
      receipts: receiptsBy[p.id] ?? [],
      srv: { received: p.received_amount ?? 0, outstanding: p.outstanding_amount ?? 0, fullyPaid: !!p.is_fully_paid },
    });
  }

  return {
    today,
    profileId: profile?.id ?? null,
    fullName: profile?.full_name ?? '',
    taxPct: profile?.tax_set_aside_pct ?? 20,
    email: session.data.session?.user.email ?? '',
    brands: brands.map(b => ({ id: b.id, name: b.name, phone: b.phone ?? '', email: b.email ?? '', instagram: b.instagram ?? '' })),
    deals: deals.filter(d => d.id).map(d => ({
      id: d.id!, brandId: d.brand_id, project: d.project_name ?? '', currency: d.currency ?? 'INR', amount: d.offer_amount,
      dates: { offerSent: d.offer_sent_on ?? '', reminded: d.offer_reminded_on ?? '', agreed: d.terms_agreed_on ?? '', delivered: d.delivered_on ?? '', invoiced: d.invoiced_on ?? '', declined: d.declined_on ?? '', cancelled: d.cancelled_on ?? '' },
      usage: d.usage_rights ?? '', usageEnd: d.usage_ends_on ?? '', rev: d.revisions ?? 2, hooks: d.hook_variants ?? 1,
      payments: paymentsBy[d.id!] ?? [],
      srv: { status: d.status, nextAction: d.next_action, paymentCount: d.payment_count ?? 0, openPaymentCount: d.open_payment_count ?? 0 },
    })),
    waitingIds: waiting.map(d => d.id),
    money,
    owedCount: countOwedPayments(payments, deals),
    insights,
  };
}

export const actions = {
  /**
   * Creates the brand first when the name is new. Returns the deal id.
   * balance: when an edit raises the price of a deal that already has payments,
   * the extra amount is added as its own payment so it shows as owed everywhere.
   */
  async saveDeal(x: { id: string | null; brandId: string | null; brandName: string; project: string; currency: string; amount: number; dates: UIDates; terms: UITerms; balance?: number }) {
    const brandId = x.brandId ?? (await createBrand({ name: x.brandName })).id;
    const fields: DealInput = { brand_id: brandId, project_name: x.project, offer_amount: x.amount, currency: x.currency, ...toDb(x.dates),
      usage_rights: x.terms.usage.trim() || null, usage_ends_on: x.terms.usageEnd || null, revisions: x.terms.rev, hook_variants: x.terms.hooks };
    if (!x.id) return createDeal(fields);
    await updateDeal(x.id, fields);
    if (x.balance && x.balance > 0)
      await createPayment({ deal_id: x.id, currency: x.currency, label: BALANCE_LABEL, amount: x.balance, due_date: null });
    return x.id;
  },
  deleteDeal,
  /** Deletes the brand's deals (with their payments and screenshots), then the brand. */
  async deleteBrandAndDeals(brandId: string, dealIds: string[]) {
    for (const id of dealIds) await deleteDeal(id);
    await deleteBrand(brandId);
  },
  /** The brand's answer to the offer: agreed or declined on that date. */
  setReply: (dealId: string, agreed: boolean, date: string) =>
    updateDeal(dealId, agreed ? { terms_agreed_on: date } : { declined_on: date }),
  markDate: (dealId: string, key: 'offerSent' | 'reminded', today: string) =>
    updateDeal(dealId, key === 'offerSent' ? { offer_sent_on: today } : { offer_reminded_on: today }),
  addPayment: (x: { dealId: string; currency: string; label: string; amount: number; dueDate: string }) =>
    createPayment({ deal_id: x.dealId, currency: x.currency, label: x.label, amount: x.amount, due_date: x.dueDate || null }),
  addReceipt: (x: { paymentId: string; amount: number; date: string; method: string; utr: string; file: File | null }) =>
    createReceipt({ payment_id: x.paymentId, amount_received: x.amount, received_on: x.date, method: x.method || null, utr: x.utr }, x.file),
  deleteReceipt,
  signedUrls,
  signedUrl,
  checkScreenshot,
  addBrand: async (x: { name: string; phone: string; email: string; instagram: string }) =>
    (await createBrand({ name: x.name, phone: x.phone || null, email: x.email || null, instagram: x.instagram || null })).id,
  /** Only the fields passed are written (see updateBrand). */
  editBrand: (id: string, x: { name?: string; phone?: string; email?: string; instagram?: string }) => updateBrand(id, x),
  deleteBrand,
  setDisputed,
  setWrittenOff,
  previewStatus: (dates: UIDates, paymentCount: number, openPaymentCount: number, receivedPaymentCount: number) =>
    previewStatus(toDb(dates), paymentCount, openPaymentCount, receivedPaymentCount),
  saveName: (profileId: string, name: string) => updateFullName(profileId, name),
  saveTaxPct: (profileId: string, pct: number) => updateTaxPct(profileId, pct),
};
