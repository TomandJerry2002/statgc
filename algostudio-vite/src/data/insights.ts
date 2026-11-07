import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/database.types';
import { fail } from './errors';

/** One row per currency: on time, overdue and top-paying brand (see migration 10). */
export type InsightRow = Database['public']['Functions']['insights_summary']['Returns'][number];

/** p_today: the user's local date (todayIn(profile.timezone)), same as moneySummary. */
export async function insightsSummary(today: string): Promise<InsightRow[]> {
  const { data, error } = await supabase().rpc('insights_summary', { p_today: today });
  if (error) fail(error);
  return data;
}
