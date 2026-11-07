import type { ConfidenceTier, Invoice, PaymentPlan } from './types';

export const AUTO_CONFIDENCE = 0.9;
export const REVIEW_CONFIDENCE = 0.5;

export function tierFor(confidence: number): ConfidenceTier {
  if (confidence >= AUTO_CONFIDENCE) return 'auto';
  if (confidence >= REVIEW_CONFIDENCE) return 'review';
  return 'ignore';
}

/**
 * Decide whether a payment settles an invoice or splits it.
 * `tolerance` absorbs bank fees and rounding (a ₹16,000 invoice paid ₹15,999 is paid).
 */
export function planPayment(invoice: Invoice, amount: number, tolerance = 1): PaymentPlan {
  const remaining = Math.max(0, invoice.total - invoice.paid);
  if (amount >= remaining - tolerance) {
    return { kind: 'full', paid: amount, extra: Math.max(0, amount - remaining) };
  }
  return { kind: 'partial', paid: amount, remaining: remaining - amount, ratio: amount / remaining };
}

/** Largest and smallest sphere diameters, in px. */
export const SPHERE_MAX = 120;
export const SPHERE_MIN = 44;

/**
 * Sphere diameter for an amount. Uses a square root so that sphere AREA tracks money:
 * a 50% deposit becomes a sphere with half the area, not half the width.
 */
export function sphereSize(amount: number, maxAmount: number) {
  const k = Math.sqrt(Math.max(0, amount) / Math.max(1, maxAmount));
  return Math.round(SPHERE_MIN + (SPHERE_MAX - SPHERE_MIN) * Math.min(1, k));
}
