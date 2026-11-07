// Currency formatting. Indian grouping (₹1,23,456) and lakh shorthand for tight spaces.
const full = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

export const formatMoney = (n: number) => full.format(Math.round(n));

/** ₹950 · ₹16k · ₹1.2L. Used inside spheres where width is scarce. */
export function formatCompact(n: number) {
  const v = Math.round(n);
  if (v >= 100_000) return `₹${trim(v / 100_000)}L`;
  if (v >= 1_000) return `₹${trim(v / 1_000)}k`;
  return `₹${v}`;
}
const trim = (x: number) => (x >= 10 ? Math.round(x).toString() : x.toFixed(1).replace(/\.0$/, ''));
