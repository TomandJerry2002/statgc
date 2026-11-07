import type { SupabaseClient } from '@supabase/supabase-js';

/**
 * The legacy data layer (src/api) was written for the pre-V1 schema
 * (creators, expenses, jsonb entity tables), which no longer exists.
 * It always runs on the localStorage demo, even when .env.local has keys.
 * The V1 app uses its own client in src/lib/supabase.ts.
 */
export const remoteEnabled = false;
export const sb = null as unknown as SupabaseClient;
