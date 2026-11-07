import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ink, springLiquid } from '../theme';
import { BalanceWell } from './BalanceWell';
import type { PipelineEventSource } from './events';
import { LiquidSphere } from './LiquidSphere';
import { planPayment, tierFor } from './splitPayment';
import { SplittingSphere } from './SplittingSphere';
import type { Invoice, PaymentMatchedEvent, PaymentPlan } from './types';

interface Props {
  invoices: Invoice[];
  balance: number;
  source: PipelineEventSource;
  /** Persist the payment. Called the instant the payload hits the balance. */
  onPaymentApplied: (invoiceId: string, amount: number) => void;
  /** 50–90% confidence: show the swipe-to-verify card. */
  onReviewNeeded: (e: PaymentMatchedEvent, plan: PaymentPlan) => void;
}

interface Active { event: PaymentMatchedEvent; plan: PaymentPlan; snapshot: Invoice }

/**
 * The main screen: balance on top, outstanding invoices floating in a glass funnel.
 * High-confidence payments play one at a time, so two arriving together never collide.
 */
export function CashPipeline({ invoices, balance, source, onPaymentApplied, onReviewNeeded }: Props) {
  const balanceRef = useRef<HTMLDivElement>(null);
  const [queue, setQueue] = useState<PaymentMatchedEvent[]>([]);
  const [active, setActive] = useState<Active | null>(null);
  const [impactKey, setImpactKey] = useState(0);
  const seen = useRef(new Set<string>());

  // Read the latest invoices inside the subscription without resubscribing.
  const invoicesRef = useRef(invoices);
  invoicesRef.current = invoices;

  // Size spheres against totals, not remaining, so a sphere never grows after a split.
  const maxAmount = useMemo(() => Math.max(1, ...invoices.map(i => i.total)), [invoices]);

  useEffect(() => source.subscribe(e => {
    if (seen.current.has(e.id)) return;            // banks and webhooks can redeliver
    seen.current.add(e.id);
    const inv = invoicesRef.current.find(i => i.id === e.invoiceId);
    if (!inv) return;
    const tier = tierFor(e.confidence);
    if (tier === 'auto') setQueue(q => [...q, e]);
    else if (tier === 'review') onReviewNeeded(e, planPayment(inv, e.amount));
  }), [source, onReviewNeeded]);

  // Start the next queued payment once the stage is free.
  useEffect(() => {
    if (active || queue.length === 0) return;
    const [next, ...rest] = queue;
    const inv = invoices.find(i => i.id === next.invoiceId);
    setQueue(rest);
    if (inv) setActive({ event: next, plan: planPayment(inv, next.amount), snapshot: { ...inv } });
  }, [active, queue, invoices]);

  return (
    <section className="flex flex-col" aria-label="Cash pipeline">
      <BalanceWell ref={balanceRef} balance={balance} impactKey={impactKey} />

      <div
        className="relative rounded-[32px] px-4 pt-8 pb-6"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))',
          border: `1px solid ${ink.line}`,
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* Funnel neck: a soft glow where money exits toward the balance. */}
        <span aria-hidden className="absolute left-1/2 -top-px h-px w-24 -translate-x-1/2"
          style={{ background: `linear-gradient(90deg, transparent, ${ink.green}, transparent)`, opacity: 0.6 }} />

        <motion.div layout className="flex flex-wrap justify-center gap-x-2 gap-y-3">
          <AnimatePresence initial={false}>
            {invoices.map((inv, i) => (
              <motion.div
                key={inv.id}
                layout
                transition={springLiquid}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
              >
                {active && active.snapshot.id === inv.id ? (
                  <SplittingSphere
                    key={active.event.id}
                    invoice={active.snapshot}
                    plan={active.plan}
                    maxAmount={maxAmount}
                    balanceRef={balanceRef}
                    onImpact={amount => {
                      setImpactKey(k => k + 1);
                      onPaymentApplied(inv.id, amount);
                    }}
                    onSettled={() => setActive(null)}
                  />
                ) : (
                  <LiquidSphere invoice={inv} maxAmount={maxAmount} index={i} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {invoices.length === 0 && (
          <p className="py-10 text-center text-[15px] font-semibold" style={{ color: ink.muted }}>
            Nothing owed right now. Every brand has paid.
          </p>
        )}
      </div>
    </section>
  );
}
