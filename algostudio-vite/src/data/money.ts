import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/database.types';
import { fail } from './errors';
import type { Deal } from './deals';
import type { Payment } from './payments';

/** One row per currency. Amounts are never added across currencies. */
export type MoneyRow = Database['public']['Functions']['money_summary']['Returns'][number];

/** p_today: the user's local date (todayIn(profile.timezone)). */
export async function moneySummary(today: string): Promise<MoneyRow[]> {
  const { data, error } = await supabase().rpc('money_summary', { p_today: today });
  if (error) fail(error);
  return data;
}

/**
 * Number of payments behind total_owed, per currency. Counts rows only
 * (no amounts), using the same filters as money_summary's open_payments:
 * not written off, deal not cancelled, outstanding > 0.
 */
export function countOwedPayments(payments: Payment[], deals: Deal[]): Record<string, number> {
  const cancelled = new Set(deals.filter(d => d.cancelled_on).map(d => d.id));
  const out: Record<string, number> = {};
  for (const p of payments) {
    if (p.written_off_on || !p.currency || cancelled.has(p.deal_id) || !((p.outstanding_amount ?? 0) > 0)) continue;
    out[p.currency] = (out[p.currency] ?? 0) + 1;
  }
  return out;
}
