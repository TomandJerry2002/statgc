import { supabase } from '@/lib/supabase';
import type { Tables, TablesInsert } from '@/lib/database.types';
import { DataError, fail, failStorage } from './errors';

export type Receipt = Tables<'payment_receipts'>;
/**
 * What the app may send. user_id is set by the database; received_on is
 * always sent from the app (the user's local date), never left to the
 * database default. screenshot_path is set by createReceipt after upload.
 */
export type ReceiptInput = Pick<TablesInsert<'payment_receipts'>, 'payment_id' | 'amount_received' | 'method' | 'utr'> & { received_on: string };
type ReceiptRow = ReceiptInput & Pick<TablesInsert<'payment_receipts'>, 'screenshot_path'>;

/** Private bucket; policies only allow paths under <auth.uid()>/. */
const BUCKET = 'receipts';
/** Allowed screenshot types, mapped to the file extension used in the path. */
const TYPES: Record<string, string> = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };
const MAX_BYTES = 5 * 1024 * 1024;
/** Signed URLs for thumbnails last 5 minutes; the drawer refreshes them. */
export const THUMB_URL_SECONDS = 300;

/** Returns a message if the file can't be used as a screenshot, else null. */
export function checkScreenshot(file: File): string | null {
  if (!TYPES[file.type]) return 'Use a JPG, PNG or WebP image.';
  if (file.size > MAX_BYTES) return 'Screenshots must be under 5 MB.';
  return null;
}

export async function listReceipts(): Promise<Receipt[]> {
  const { data, error } = await supabase().from('payment_receipts').select('*').order('received_on').order('created_at');
  if (error) fail(error);
  return data;
}

/** Uploads to receipts/<user_id>/<random id>.<ext> and returns the path. */
async function uploadScreenshot(file: File): Promise<string> {
  const bad = checkScreenshot(file);
  if (bad) throw new DataError(bad, null);
  // The folder must be the signed-in user's id; storage policies check it against auth.uid().
  const { data: auth, error: authError } = await supabase().auth.getUser();
  if (authError || !auth.user) failStorage(authError ?? new Error('Not signed in'));
  const path = `${auth.user.id}/${crypto.randomUUID()}.${TYPES[file.type]}`;
  const { error } = await supabase().storage.from(BUCKET).upload(path, file, { contentType: file.type, upsert: false });
  if (error) failStorage(error, "Couldn't upload the screenshot. Please try again.");
  return path;
}

/** Saves a receipt; with a screenshot, uploads it first and stores its path (never a URL). */
export async function createReceipt(input: ReceiptInput, screenshot?: File | null): Promise<void> {
  const screenshot_path = screenshot ? await uploadScreenshot(screenshot) : null;
  const row: ReceiptRow = {
    payment_id: input.payment_id,
    amount_received: input.amount_received,
    received_on: input.received_on,
    method: input.method ?? null,
    utr: input.utr || null,
    screenshot_path,
  };
  const { error } = await supabase().from('payment_receipts').insert(row);
  if (error) {
    // Don't leave an uploaded file with no receipt pointing at it.
    if (screenshot_path) await removeFile(screenshot_path);
    fail(error);
  }
}

/** Deletes the receipt, then its screenshot. The path comes from the deleted row, not the client. */
export async function deleteReceipt(id: string): Promise<void> {
  const { data, error } = await supabase().from('payment_receipts').delete().eq('id', id).select('screenshot_path');
  if (error) fail(error);
  const path = data[0]?.screenshot_path;
  if (path) await removeFile(path);
}

/** Best effort: the receipt is already gone, so a failure here only leaves an unreachable file. */
async function removeFile(path: string) {
  const { error } = await supabase().storage.from(BUCKET).remove([path]);
  if (error) console.error('[storage] could not delete', path, error);
}

/** Short-lived signed URLs for several screenshots, keyed by path. */
export async function signedUrls(paths: string[], seconds = THUMB_URL_SECONDS): Promise<Record<string, string>> {
  if (!paths.length) return {};
  const { data, error } = await supabase().storage.from(BUCKET).createSignedUrls(paths, seconds);
  if (error) failStorage(error);
  const out: Record<string, string> = {};
  for (const x of data) if (x.signedUrl && x.path) out[x.path] = x.signedUrl;
  return out;
}

/** A fresh one-minute signed URL for opening one screenshot full size. */
export async function signedUrl(path: string): Promise<string> {
  const { data, error } = await supabase().storage.from(BUCKET).createSignedUrl(path, 60);
  if (error) failStorage(error);
  return data.signedUrl;
}
