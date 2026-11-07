import { supabase } from '@/lib/supabase';
import type { Database, Tables, TablesInsert } from '@/lib/database.types';
import { fail } from './errors';

/** A row of the deals_with_status view: the deal plus its derived status. */
export type Deal = Tables<'deals_with_status'>;

/** Status codes from compute_deal_status, mapped to labels in one place. */
export const STATUS_LABELS: Record<string, string> = {
  draft_offer: 'Draft offer',
  offer_sent: 'Offer sent',
  offer_follow_up: 'Offer follow-up',
  agreed: 'Agreed / Active',
  declined: 'Declined',
  cancelled: 'Cancelled',
};
/** Unknown codes show as the raw code instead of crashing. */
export const statusLabel = (code: string | null | undefined) => (code ? STATUS_LABELS[code] ?? code : '');

type DateFields = 'offer_sent_on' | 'offer_reminded_on' | 'terms_agreed_on' | 'declined_on' | 'cancelled_on';
/** What the app may send. user_id is set by the database (default auth.uid()). */
export type DealInput = Pick<TablesInsert<'deals'>, 'brand_id' | 'project_name' | 'offer_amount' | 'currency' | DateFields>;
export type DealPatch = Partial<DealInput>;

const pickDeal = (x: DealPatch): DealPatch => {
  const keys = ['brand_id', 'project_name', 'offer_amount', 'currency', 'offer_sent_on', 'offer_reminded_on', 'terms_agreed_on', 'declined_on', 'cancelled_on'] as const;
  const out: Record<string, unknown> = {};
  for (const k of keys) if (k in x) out[k] = x[k];
  return out as DealPatch;
};

export async function listDeals(): Promise<Deal[]> {
  const { data, error } = await supabase().from('deals_with_status').select('*').order('created_at', { ascending: false });
  if (error) fail(error);
  return data;
}

/** "Deals waiting for brand reply". */
export async function listWaitingDeals(): Promise<Deal[]> {
  const { data, error } = await supabase().from('deals_with_status').select('*').eq('waiting_for_reply', true).order('created_at', { ascending: false });
  if (error) fail(error);
  return data;
}

export async function getDeal(id: string): Promise<Deal | null> {
  const { data, error } = await supabase().from('deals_with_status').select('*').eq('id', id).maybeSingle();
  if (error) fail(error);
  return data;
}

/** Returns the new deal's id. */
export async function createDeal(input: DealInput): Promise<string> {
  const { data, error } = await supabase().from('deals').insert(pickDeal(input) as DealInput).select('id').single();
  if (error) fail(error, 'deal.save');
  return data.id;
}

export async function updateDeal(id: string, patch: DealPatch): Promise<void> {
  const { error } = await supabase().from('deals').update(pickDeal(patch)).eq('id', id);
  if (error) fail(error, 'deal.save');
}

type StatusArgs = Database['public']['Functions']['compute_deal_status']['Args'];
export type StatusDates = { [K in DateFields]?: string | null };

/**
 * Live status preview for the deal form, computed by the database's
 * compute_deal_status. Pass the deal's current payment counts (0 for a new deal).
 */
export async function previewStatus(dates: StatusDates, paymentCount = 0, openPaymentCount = 0): Promise<string | null> {
  // The generated arg types say string, but the function accepts nulls.
  const d = (v?: string | null) => (v || null) as string;
  const args: StatusArgs = {
    p_offer_sent_on: d(dates.offer_sent_on),
    p_offer_reminded_on: d(dates.offer_reminded_on),
    p_terms_agreed_on: d(dates.terms_agreed_on),
    p_declined_on: d(dates.declined_on),
    p_cancelled_on: d(dates.cancelled_on),
    p_payment_count: paymentCount,
    p_open_payment_count: openPaymentCount,
  };
  const { data, error } = await supabase().rpc('compute_deal_status', args);
  if (error) fail(error);
  return data[0]?.status ?? null;
}
