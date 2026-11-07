import { supabase } from '@/lib/supabase';
import type { Tables, TablesInsert } from '@/lib/database.types';
import { fail } from './errors';

export type Brand = Tables<'brands'>;
/** What the app may send. user_id is set by the database (default auth.uid()). */
export type BrandInput = Pick<TablesInsert<'brands'>, 'name' | 'phone' | 'email'>;

export async function listBrands(): Promise<Brand[]> {
  const { data, error } = await supabase().from('brands').select('*').order('name');
  if (error) fail(error);
  return data;
}

export async function createBrand(input: BrandInput): Promise<Brand> {
  const row: BrandInput = { name: input.name, phone: input.phone ?? null, email: input.email ?? null };
  const { data, error } = await supabase().from('brands').insert(row).select('*').single();
  if (error) fail(error);
  return data;
}

/** Fails with 23503 while the brand still has deals (see errors.ts). */
export async function deleteBrand(id: string): Promise<void> {
  const { error } = await supabase().from('brands').delete().eq('id', id);
  if (error) fail(error, 'brand.delete');
}
