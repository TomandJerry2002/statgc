import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let client: SupabaseClient<Database> | null = null;

/**
 * The typed V1 client, created on first use.
 * Created lazily so pages that never touch real data (the marketing site
 * with its embedded demo) never start a Supabase session.
 */
export function supabase(): SupabaseClient<Database> {
  if (!client) {
    if (!url || !key) throw new Error('Supabase is not configured: add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local');
    client = createClient<Database>(url, key);
  }
  return client;
}
