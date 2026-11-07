/**
 * Market baseline for a UGC offer.
 *
 * UGC creators are paid for the content they make, not for their audience, so the
 * baseline starts from a per-asset rate. Usage rights and exclusivity then add to it,
 * because that is where brands extract most of the value. If the creator has set their
 * own rates, those win: their own rate card is the most defensible baseline.
 *
 * RATE_CARD values are starting assumptions in INR. Calibrate them with real accepted
 * deals from the payments table before trusting the percentages in production.
 */

export type AssetType = 'ugc_video' | 'reel_posted' | 'story_posted' | 'photo_set' | 'hook_variation';
export type Tier = 'new' | 'established' | 'pro';

export const RATE_CARD: Record<AssetType, number> = {
  ugc_video: 8000,          // unposted video delivered to the brand
  reel_posted: 11000,       // made and posted on the creator's own channel
  story_posted: 3000,
  photo_set: 4500,
  hook_variation: 1500,     // extra opening for an existing video
};
const TIER_MULTIPLIER: Record<Tier, number> = { new: 0.7, established: 1, pro: 1.6 };
const ASSET_LABEL: Record<AssetType, [string, string]> = {
  ugc_video: ['UGC video', 'UGC videos'],
  reel_posted: ['posted Reel', 'posted Reels'],
  story_posted: ['posted Story', 'posted Stories'],
  photo_set: ['photo set', 'photo sets'],
  hook_variation: ['hook variation', 'hook variations'],
};

export interface CreatorProfile {
  tier: Tier;
  rates?: Partial<Record<AssetType, number>>;   // the creator's own rate card
}

export interface Offer {
  brand: string;
  contact?: string;
  cash: number;                                  // 0 means gifted only
  productValue?: number;                         // shown, never counted as pay
  deliverables: { type: AssetType; qty: number }[];
  paidUsageMonths: number;                       // 0 = organic only; -1 = perpetual
  exclusivityDays: number;
  revisions: number;
}

export type Verdict = 'fair' | 'low' | 'severe' | 'gifted';

export interface Assessment {
  baseline: number;
  low: number;
  high: number;
  offer: number;
  gap: number;                                   // baseline − offer, never negative
  undercut: number;                              // 0..1
  verdict: Verdict;
  shouldShield: boolean;
  lines: { label: string; amount: number }[];    // how the baseline was built
  summary: string;                               // "2 UGC videos, 6 months paid usage"
}

const round100 = (n: number) => Math.round(n / 100) * 100;

export function assessOffer(offer: Offer, profile: CreatorProfile): Assessment {
  const tierX = TIER_MULTIPLIER[profile.tier];
  const lines: Assessment['lines'] = [];

  // 1. Content: per-asset rate × quantity.
  let content = 0;
  for (const d of offer.deliverables) {
    if (d.qty <= 0) continue;
    const unit = profile.rates?.[d.type] ?? RATE_CARD[d.type] * tierX;
    const amount = unit * d.qty;
    content += amount;
    lines.push({ label: `${d.qty} × ${ASSET_LABEL[d.type][d.qty > 1 ? 1 : 0]}`, amount: round100(amount) });
  }

  // 2. Paid usage: brands running your content as ads. +25% per 3 months, +150% perpetual.
  const m = offer.paidUsageMonths;
  const usageX = m < 0 ? 1.5 : m > 0 ? 0.25 * Math.ceil(m / 3) : 0;
  if (usageX > 0) lines.push({ label: m < 0 ? 'Paid usage, forever' : `Paid usage, ${m} months`, amount: round100(content * usageX) });

  // 3. Exclusivity: you can't work with competitors. +10% per 30 days.
  const exclX = offer.exclusivityDays > 0 ? 0.1 * Math.ceil(offer.exclusivityDays / 30) : 0;
  if (exclX > 0) lines.push({ label: `Exclusivity, ${offer.exclusivityDays} days`, amount: round100(content * exclX) });

  // 4. Revisions beyond two rounds: +10% each.
  const revX = Math.max(0, offer.revisions - 2) * 0.1;
  if (revX > 0) lines.push({ label: `${offer.revisions - 2} extra revision rounds`, amount: round100(content * revX) });

  const baseline = round100(content * (1 + usageX + exclX + revX));
  const offerCash = Math.max(0, offer.cash);
  const gap = Math.max(0, baseline - offerCash);
  const undercut = baseline > 0 ? gap / baseline : 0;
  const verdict: Verdict = offerCash === 0 ? 'gifted' : undercut >= 0.5 ? 'severe' : undercut >= 0.25 ? 'low' : 'fair';

  const parts = offer.deliverables.filter(d => d.qty > 0).map(d => `${d.qty} ${ASSET_LABEL[d.type][d.qty > 1 ? 1 : 0]}`);
  if (m !== 0) parts.push(m < 0 ? 'paid usage forever' : `${m} months paid usage`);

  return {
    baseline,
    low: round100(baseline * 0.85),
    high: round100(baseline * 1.15),
    offer: offerCash,
    gap,
    undercut,
    verdict,
    shouldShield: verdict !== 'fair',
    lines,
    summary: parts.join(', '),
  };
}

/** Ready-to-send replies. Plain, polite, and specific about the number. */
export function counterMessage(o: Offer, a: Assessment, fmt: (n: number) => string) {
  const hi = o.contact ? `Hi ${o.contact}` : 'Hi';
  return `${hi}, thanks for thinking of me for ${o.brand}. For ${a.summary}, my rate is ${fmt(a.baseline)}. Happy to get started at that.`;
}
export function declineMessage(o: Offer, a: Assessment, fmt: (n: number) => string) {
  const hi = o.contact ? `Hi ${o.contact}` : 'Hi';
  if (a.verdict === 'gifted') {
    return `${hi}, thanks for reaching out. I only take on paid partnerships at the moment. My rate for ${a.summary} starts at ${fmt(a.low)}. I'd be glad to work together at that.`;
  }
  return `${hi}, thanks for reaching out. I can't take this on at ${fmt(a.offer)}. If the budget changes, I'd love to work together.`;
}
