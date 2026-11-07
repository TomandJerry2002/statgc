import { motion, useReducedMotion } from 'framer-motion';
import { formatCompact } from '../money';
import { ink } from '../theme';
import { SPHERE_MAX, sphereSize } from './splitPayment';
import type { Invoice } from './types';

/** Fixed footprint for every pipeline slot, so spheres of any size line up. */
export const SLOT_W = 136;
export const SLOT_H = SPHERE_MAX + 36;

/**
 * The glass body of a sphere. "open" is dark glass with liquid pooled at the bottom
 * (money owed, not yet yours). "paid" glows Volcanic Green (money that is yours).
 */
export function SphereSkin({ tone }: { tone: 'open' | 'paid' }) {
  const open = {
    background: [
      'radial-gradient(circle at 32% 26%, rgba(255,255,255,0.40) 0, rgba(255,255,255,0) 24%)',
      'radial-gradient(circle at 50% 80%, rgba(0,255,102,0.24) 0, rgba(0,255,102,0) 52%)',
      'radial-gradient(circle at 50% 58%, #2A2A33 0%, #16161B 72%)',
    ].join(','),
    boxShadow: 'inset 0 -10px 24px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.06)',
  };
  const paid = {
    background: [
      'radial-gradient(circle at 32% 26%, rgba(255,255,255,0.75) 0, rgba(255,255,255,0) 22%)',
      'radial-gradient(circle at 50% 58%, #00FF66 0%, #00B84A 74%)',
    ].join(','),
    boxShadow: 'inset 0 -10px 22px rgba(0,60,25,0.45), 0 0 24px rgba(0,255,102,0.45), 0 0 64px rgba(0,255,102,0.18)',
  };
  return <span aria-hidden className="absolute inset-0 rounded-full" style={tone === 'open' ? open : paid} />;
}

interface Props {
  invoice: Invoice;
  maxAmount: number;
  index: number;
}

/** An outstanding invoice, floating gently in the pipeline. */
export function LiquidSphere({ invoice, maxAmount, index }: Props) {
  const reduce = useReducedMotion();
  const remaining = invoice.total - invoice.paid;
  const size = sphereSize(remaining, maxAmount);
  const partlyPaid = invoice.paid > 0;

  return (
    <div className="relative" style={{ width: SLOT_W, height: SLOT_H }}>
      <motion.div
        className="absolute left-1/2"
        style={{ width: size, height: size, marginLeft: -size / 2, top: SPHERE_MAX / 2 - size / 2 }}
        // A slow, desynchronised bob so the pipeline feels like liquid, not a grid.
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 3.4 + (index % 4) * 0.45, repeat: Infinity, ease: 'easeInOut' }}
      >
        <SphereSkin tone="open" />
        <span className="absolute inset-0 grid place-items-center text-[15px] font-bold" style={{ color: ink.text }}>
          {formatCompact(remaining)}
        </span>
      </motion.div>
      <span
        className="absolute left-0 right-0 text-center text-[13px] font-semibold truncate px-1"
        style={{ top: SPHERE_MAX / 2 + size / 2 + 8, color: partlyPaid ? ink.text : ink.muted }}
      >
        {invoice.brand}{partlyPaid ? ' · left' : ''}
      </span>
    </div>
  );
}
