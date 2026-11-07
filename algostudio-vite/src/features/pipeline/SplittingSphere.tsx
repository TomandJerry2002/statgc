import { useAnimate, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, type RefObject } from 'react';
import { haptic } from '../haptics';
import { formatCompact, formatMoney } from '../money';
import { easeFall, easeOut, ink, springLiquid, springSnap, wait } from '../theme';
import { SLOT_H, SLOT_W, SphereSkin } from './LiquidSphere';
import { SPHERE_MAX, sphereSize } from './splitPayment';
import type { Invoice, PaymentPlan } from './types';

interface Props {
  invoice: Invoice;                              // state BEFORE this payment
  plan: PaymentPlan;
  maxAmount: number;                             // same value LiquidSphere uses, so sizes match
  balanceRef: RefObject<HTMLElement | null>;     // where the paid payload lands
  onImpact: (amount: number) => void;            // paid payload hit the balance
  onSettled: () => void;                         // choreography finished
}

/**
 * One invoice receiving money.
 *
 * Partial payment: the sphere tenses, a crack runs top to bottom, the two halves snap
 * apart and each heals into a full sphere sized by its share of the money. The paid
 * half turns green, falls into the balance, and the remaining half settles back home.
 *
 * Full payment: the sphere turns green and falls straight into the balance.
 *
 * How it works: the sphere is drawn as two overlapping "shells", each a full circle
 * clipped to one half. Side by side they read as one sphere. Splitting animates each
 * shell's clip-path from half to whole while scaling it to its new size, so the crack
 * and the healing are one continuous motion with no element swaps.
 */
export function SplittingSphere({ invoice, plan, maxAmount, balanceRef, onImpact, onSettled }: Props) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reduce = useReducedMotion();
  const started = useRef(false);
  const mounted = useRef(false);

  const partial = plan.kind === 'partial';
  const before = invoice.total - invoice.paid;
  const orig = sphereSize(before, maxAmount);
  const paidSize = sphereSize(plan.paid, maxAmount);
  const restSize = partial ? sphereSize(plan.remaining, maxAmount) : 0;
  const gap = orig * 0.58;                        // how far the halves travel apart
  const coreTop = SPHERE_MAX / 2 - orig / 2;     // aligns with LiquidSphere's sphere
  const labelTop = (size: number) => orig / 2 + size / 2 + 8;

  useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);

  useEffect(() => {
    // StrictMode runs effects twice in development; only choreograph once.
    if (started.current) return;
    started.current = true;

    const run = async () => {
      if (reduce) {
        onImpact(plan.paid);
        onSettled();
        return;
      }

      // 1. Tension: the liquid strains against its surface.
      await animate('[data-core]',
        { scaleX: [1, 1.07, 0.97, 1], scaleY: [1, 0.93, 1.03, 1] },
        { duration: 0.42, ease: 'easeInOut' });

      if (partial) {
        // 2. Crack: a fracture line draws itself top to bottom.
        await animate('[data-crack] path', { strokeDashoffset: [1, 0] }, { duration: 0.24, ease: [0.4, 0, 1, 1] });
        haptic('tick');

        // 3. Break and heal at once: halves snap apart while each grows into a whole sphere.
        animate('[data-whole]', { opacity: 0, y: -4 }, { duration: 0.14 });
        animate('[data-crack]', { opacity: 0 }, { duration: 0.12 });
        await Promise.all([
          animate('[data-group="paid"]', { x: -gap }, springSnap),
          animate('[data-group="rest"]', { x: gap }, springSnap),
          animate('[data-sphere="paid"]', { rotate: [0, -10, 0] }, { duration: 0.5, ease: easeOut }),
          animate('[data-sphere="rest"]', { rotate: [0, 10, 0] }, { duration: 0.5, ease: easeOut }),
          // clip-path is a string, so it tweens; scale springs for a liquid wobble.
          animate('[data-sphere]', { clipPath: 'inset(0% 0% 0% 0%)' }, { duration: 0.32, ease: easeOut, delay: 0.05 }),
          animate('[data-sphere="paid"]', { scale: paidSize / orig }, { ...springLiquid, delay: 0.05 }),
          animate('[data-sphere="rest"]', { scale: restSize / orig }, { ...springLiquid, delay: 0.05 }),
          animate('[data-glow]', { opacity: 1 }, { duration: 0.3, delay: 0.12 }),
          animate('[data-label]', { opacity: 1, y: [4, 0] }, { duration: 0.22, delay: 0.24, ease: easeOut }),
        ]);

        // Hold so the eye can read two payloads before one leaves.
        await wait(420);
      } else {
        await animate('[data-glow]', { opacity: 1 }, { duration: 0.28 });
        animate('[data-whole]', { opacity: 0 }, { duration: 0.12 });
      }

      // 4. Fall: measure the live distance to the balance and accelerate into it.
      const group = scope.current?.querySelector<HTMLElement>('[data-group="paid"]');
      const target = balanceRef.current;
      if (group && target) {
        const a = group.getBoundingClientRect();
        const b = target.getBoundingClientRect();
        const dx = b.left + b.width / 2 - (a.left + a.width / 2);
        const dy = b.top + b.height / 2 - (a.top + a.height / 2);
        animate('[data-label="paid"]', { opacity: 0 }, { duration: 0.1 });
        await Promise.all([
          animate('[data-group="paid"]', { x: (partial ? -gap : 0) + dx, y: dy }, { duration: 0.52, ease: easeFall }),
          animate('[data-sphere="paid"]', { scale: (partial ? paidSize / orig : 1) * 0.45 }, { duration: 0.52, ease: easeFall }),
        ]);
      }
      animate('[data-group="paid"]', { opacity: 0 }, { duration: 0.06 });
      if (mounted.current) onImpact(plan.paid);

      // 5. Settle: the remaining payload drifts back to its slot.
      if (partial) await animate('[data-group="rest"]', { x: 0 }, springLiquid);
      if (mounted.current) onSettled();
    };

    void run();
    // Choreography is fire-once by design; inputs are captured at mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={scope} className="relative z-10" style={{ width: SLOT_W, height: SLOT_H }}>
      <div
        data-core
        className="absolute left-1/2"
        style={{ width: orig, height: orig, marginLeft: -orig / 2, top: coreTop }}
      >
        {/* Paid shell: left half until it heals */}
        <div data-group="paid" className="absolute inset-0">
          <div data-sphere="paid" className="absolute inset-0" style={{ clipPath: partial ? 'inset(0% 50% 0% 0%)' : 'inset(0% 0% 0% 0%)' }}>
            <SphereSkin tone="open" />
            <span data-glow className="absolute inset-0" style={{ opacity: 0 }}><SphereSkin tone="paid" /></span>
          </div>
          {partial && (
            <span data-label="paid" className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[13px] font-bold"
              style={{ top: labelTop(paidSize), color: ink.green, opacity: 0 }}>
              {formatMoney(plan.paid)} in
            </span>
          )}
        </div>

        {/* Remaining shell: right half until it heals */}
        {partial && (
          <div data-group="rest" className="absolute inset-0">
            <div data-sphere="rest" className="absolute inset-0" style={{ clipPath: 'inset(0% 0% 0% 50%)' }}>
              <SphereSkin tone="open" />
            </div>
            <span data-label="rest" className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[13px] font-semibold"
              style={{ top: labelTop(restSize), color: ink.muted, opacity: 0 }}>
              {formatMoney(plan.remaining)} left
            </span>
          </div>
        )}

        {/* Fracture line. pathLength=1 lets dashoffset run 1 → 0 regardless of path length. */}
        {partial && (
          <svg data-crack viewBox="0 0 100 100" className="absolute inset-0 pointer-events-none" aria-hidden>
            <path d="M50 3 L45 20 L55 34 L46 50 L56 64 L47 80 L51 97" pathLength={1}
              fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth={1.6} strokeLinejoin="round"
              vectorEffect="non-scaling-stroke" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
          </svg>
        )}

        {/* Whole-sphere label, identical to LiquidSphere so the handoff is invisible */}
        <span data-whole className="absolute inset-0 grid place-items-center text-[15px] font-bold" style={{ color: ink.text }}>
          {formatCompact(before)}
        </span>
        <span data-whole className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[13px] font-semibold"
          style={{ top: labelTop(orig), color: ink.muted }}>
          {invoice.brand}
        </span>
      </div>
    </div>
  );
}
