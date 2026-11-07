import { supabase } from '@/lib/supabase';
import type { Tables } from '@/lib/database.types';
import { fail } from './errors';

export type Profile = Pick<Tables<'profiles'>, 'id' | 'full_name' | 'timezone'>;

/** The signed-in user's profile. RLS returns only their own row. */
export async function getMyProfile(): Promise<Profile | null> {
  const { data, error } = await supabase().from('profiles').select('id, full_name, timezone').maybeSingle();
  if (error) fail(error);
  return data;
}

/** Saves the display name. `id` is the profile row read above; RLS still checks it. */
export async function updateFullName(id: string, fullName: string): Promise<void> {
  const { error } = await supabase().from('profiles').update({ full_name: fullName.trim() || null }).eq('id', id);
  if (error) fail(error);
}
