import { supabase } from '@/lib/supabase';
import type { Tables, TablesInsert } from '@/lib/database.types';
import { fail } from './errors';

export type Receipt = Tables<'payment_receipts'>;
/**
 * What the app may send. user_id is set by the database; received_on is
 * always sent from the app (the user's local date), never left to the
 * database default. screenshot_path waits for Phase 5.
 */
export type ReceiptInput = Pick<TablesInsert<'payment_receipts'>, 'payment_id' | 'amount_received' | 'method' | 'utr'> & { received_on: string };

export async function listReceipts(): Promise<Receipt[]> {
  const { data, error } = await supabase().from('payment_receipts').select('*').order('received_on').order('created_at');
  if (error) fail(error);
  return data;
}

export async function createReceipt(input: ReceiptInput): Promise<void> {
  const row: ReceiptInput = {
    payment_id: input.payment_id,
    amount_received: input.amount_received,
    received_on: input.received_on,
    method: input.method ?? null,
    utr: input.utr || null,
  };
  const { error } = await supabase().from('payment_receipts').insert(row);
  if (error) fail(error);
}
