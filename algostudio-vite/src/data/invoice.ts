import { supabase } from '@/lib/supabase';
import { fail } from './errors';

/**
 * What a deal's invoice starts from: the deal's terms, the brand, and each
 * payment with what has been received. Null when the deal doesn't exist
 * (deleted, or another account's: RLS hides it).
 */
export async function dealForInvoice(id: string) {
  const db = supabase();
  const { data: deal, error } = await db.from('deals')
    .select('brand_id, project_name, offer_amount, currency, usage_rights, usage_ends_on, revisions, hook_variants, terms_agreed_on, invoiced_on, cancelled_on')
    .eq('id', id).maybeSingle();
  if (error) fail(error);
  if (!deal) return null;
  const [{ data: brand, error: be }, { data: payments, error: pe }] = await Promise.all([
    db.from('brands').select('name, email').eq('id', deal.brand_id).maybeSingle(),
    db.from('payments_with_balance').select('due_date, received_amount, outstanding_amount, written_off_on')
      .eq('deal_id', id).order('due_date', { ascending: true, nullsFirst: false }),
  ]);
  if (be) fail(be);
  if (pe) fail(pe);
  return { deal, brand, payments };
}
