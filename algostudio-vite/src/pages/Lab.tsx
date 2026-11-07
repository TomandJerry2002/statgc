// /lab: try the split pipeline and the Exploitation Shield with simulated events.
import { useCallback, useMemo, useState } from 'react';
import { formatMoney } from '../features/money';
import { CashPipeline } from '../features/pipeline/CashPipeline';
import { createLocalSource } from '../features/pipeline/events';
import type { Invoice, PaymentMatchedEvent, PaymentPlan } from '../features/pipeline/types';
import { ExploitationShield } from '../features/shield/ExploitationShield';
import { assessOffer, type CreatorProfile, type Offer } from '../features/shield/marketBaseline';
import { ink } from '../features/theme';

const START: Invoice[] = [
  { id: 'nike', brand: 'Nike India Ltd', total: 16000, paid: 0 },
  { id: 'bloom', brand: 'Bloom Tea', total: 60000, paid: 0 },
  { id: 'glow', brand: 'GlowSkin India', total: 25000, paid: 0 },
  { id: 'sol', brand: 'Sol Sunscreen', total: 40000, paid: 0 },
];
const PROFILE: CreatorProfile = { tier: 'established' };

export default function Lab() {
  const source = useMemo(createLocalSource, []);
  const [invoices, setInvoices] = useState(START);
  const [balance, setBalance] = useState(72000);
  const [review, setReview] = useState<{ e: PaymentMatchedEvent; plan: PaymentPlan } | null>(null);

  const [cash, setCash] = useState(6000);
  const [shieldOpen, setShieldOpen] = useState(false);
  const [note, setNote] = useState('');

  const applied = useCallback((id: string, amount: number) => {
    setBalance(b => b + amount);
    setInvoices(list => list
      .map(i => (i.id === id ? { ...i, paid: i.paid + amount } : i))
      .filter(i => i.total - i.paid > 1));
  }, []);
  const needsReview = useCallback((e: PaymentMatchedEvent, plan: PaymentPlan) => setReview({ e, plan }), []);

  const emit = (invoiceId: string, fraction: number, confidence: number, descriptor: string) => {
    const inv = invoices.find(i => i.id === invoiceId);
    if (!inv) return;
    source.emit({
      type: 'payment.matched', id: crypto.randomUUID(), invoiceId,
      amount: Math.round((inv.total - inv.paid) * fraction), confidence, descriptor, receivedAt: new Date().toISOString(),
    });
  };

  const offer: Offer = {
    brand: 'Kora Living', contact: 'Sana', cash, productValue: cash === 0 ? 4500 : undefined,
    deliverables: [{ type: 'ugc_video', qty: 2 }, { type: 'hook_variation', qty: 2 }],
    paidUsageMonths: 6, exclusivityDays: 0, revisions: 2,
  };
  const assessment = assessOffer(offer, PROFILE);

  const btn = 'h-12 rounded-2xl px-4 text-[15px] font-bold disabled:opacity-40';

  return (
    <main className="min-h-dvh px-4 py-8" style={{ background: ink.canvas, color: ink.text }}>
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="flex flex-col gap-4">
          <CashPipeline invoices={invoices} balance={balance} source={source} onPaymentApplied={applied} onReviewNeeded={needsReview} />

          {review && (
            <div className="flex items-center gap-3 rounded-2xl p-4" style={{ background: ink.card, border: `1px solid ${ink.line}` }}>
              <div className="flex-1 min-w-0">
                <p className="truncate font-mono text-[13px]" style={{ color: ink.muted }}>{review.e.descriptor}</p>
                <p className="text-[15px] font-bold">
                  {formatMoney(review.e.amount)} from {invoices.find(i => i.id === review.e.invoiceId)?.brand}? · {Math.round(review.e.confidence * 100)}% match
                </p>
              </div>
              <button className={btn} style={{ background: ink.green, color: ink.canvas }}
                onClick={() => { source.emit({ ...review.e, id: review.e.id + ':ok', confidence: 1 }); setReview(null); }}>
                Yes
              </button>
              <button className={btn} style={{ background: ink.cardHi }} onClick={() => setReview(null)}>No</button>
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-6">
          <section className="flex flex-col gap-2 rounded-3xl p-5" style={{ background: ink.card }}>
            <h2 className="text-[17px] font-extrabold">Simulate the bank</h2>
            <button className={btn} style={{ background: ink.cardHi }} disabled={!invoices.some(i => i.id === 'nike')}
              onClick={() => emit('nike', 0.5, 0.96, 'ACH DEP: NIKE INTL CRDT')}>Nike pays a 50% deposit</button>
            <button className={btn} style={{ background: ink.cardHi }} disabled={!invoices.some(i => i.id === 'bloom')}
              onClick={() => emit('bloom', 1, 0.93, 'NEFT CR BLOOMTEA PVT')}>Bloom Tea pays in full</button>
            <button className={btn} style={{ background: ink.cardHi }} disabled={!invoices.some(i => i.id === 'glow')}
              onClick={() => emit('glow', 0.3, 0.72, 'UPI/GLWSKN/8812')}>Unclear match (72%)</button>
          </section>

          <section className="flex flex-col gap-3 rounded-3xl p-5" style={{ background: ink.card }}>
            <h2 className="text-[17px] font-extrabold">Check an offer</h2>
            <p className="text-[14px]" style={{ color: ink.muted }}>Kora Living · 2 UGC videos, 2 hooks, 6 months paid usage</p>
            <label className="flex flex-col gap-2 text-[14px] font-semibold">
              Cash offered: {cash === 0 ? 'gifted only' : formatMoney(cash)}
              <input type="range" min={0} max={40000} step={500} value={cash} onChange={e => setCash(+e.target.value)} />
            </label>
            <button className={btn} style={{ background: ink.green, color: ink.canvas }}
              onClick={() => (assessment.shouldShield ? setShieldOpen(true) : setNote(`${formatMoney(cash)} is a fair offer.`))}>
              Check offer
            </button>
            {note && <p className="text-[14px]" style={{ color: ink.green }}>{note}</p>}
          </section>
        </aside>
      </div>

      <ExploitationShield
        open={shieldOpen} offer={offer} assessment={assessment}
        onClose={() => setShieldOpen(false)}
        onCounter={amount => setNote(`Countered at ${formatMoney(amount)}.`)}
        onDecline={() => setNote('Declined.')}
        onAcceptAnyway={() => { setShieldOpen(false); setNote('Accepted anyway.'); }}
      />
    </main>
  );
}
