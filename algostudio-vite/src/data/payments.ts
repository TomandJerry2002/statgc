import { supabase } from '@/lib/supabase';
import type { Tables, TablesInsert } from '@/lib/database.types';
import { fail } from './errors';

/** A row of payments_with_balance: the payment plus received / outstanding / fully paid. */
export type Payment = Tables<'payments_with_balance'>;
/** What the app may send. user_id is set by the database (default auth.uid()). */
export type PaymentInput = Pick<TablesInsert<'payments'>, 'deal_id' | 'label' | 'amount' | 'currency' | 'due_date'>;

export async function listPayments(): Promise<Payment[]> {
  const { data, error } = await supabase().from('payments_with_balance').select('*').order('due_date', { ascending: true, nullsFirst: false });
  if (error) fail(error);
  return data;
}

/** Always pass the deal's currency: payments.currency defaults to INR on its own. Returns the new payment's id. */
export async function createPayment(input: PaymentInput): Promise<string> {
  const row: PaymentInput = { deal_id: input.deal_id, label: input.label, amount: input.amount, currency: input.currency, due_date: input.due_date ?? null };
  const { data, error } = await supabase().from('payments').insert(row).select('id').single();
  if (error) fail(error);
  return data.id;
}

/** Changes a payment's label and/or due date. Only the fields passed are written. */
export async function updatePayment(id: string, patch: { label?: string; due_date?: string | null }): Promise<void> {
  const row: { label?: string; due_date?: string | null } = {};
  if (patch.label !== undefined) row.label = patch.label;
  if (patch.due_date !== undefined) row.due_date = patch.due_date;
  const { error } = await supabase().from('payments').update(row).eq('id', id);
  if (error) fail(error);
}

/** Mark as disputed with today's local date, or pass null to undo. */
export async function setDisputed(id: string, on: string | null): Promise<void> {
  const { error } = await supabase().from('payments').update({ disputed_on: on }).eq('id', id);
  if (error) fail(error);
}

/** Write off with today's local date, or pass null to undo. */
export async function setWrittenOff(id: string, on: string | null): Promise<void> {
  const { error } = await supabase().from('payments').update({ written_off_on: on }).eq('id', id);
  if (error) fail(error);
}
