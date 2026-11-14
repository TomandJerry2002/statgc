import { supabase } from '@/lib/supabase';
import type { Tables, TablesInsert } from '@/lib/database.types';
import { fail } from './errors';

export type Brand = Tables<'brands'>;
/** What the app may send. user_id is set by the database (default auth.uid()). */
export type BrandInput = Pick<TablesInsert<'brands'>, 'name' | 'phone' | 'email' | 'instagram'>;

/** Instagram handles are stored without the leading @ or profile URL. */
export const cleanInstagram = (v: string | null | undefined) =>
  (v ?? '').trim().replace(/^(https?:\/\/)?(www\.)?instagram\.com\//i, '').replace(/^@+/, '').replace(/\/+$/, '') || null;

const toRow = (input: Partial<BrandInput>) => {
  const row: Partial<BrandInput> = {};
  if ('name' in input) row.name = input.name;
  if ('phone' in input) row.phone = input.phone || null;
  if ('email' in input) row.email = input.email || null;
  if ('instagram' in input) row.instagram = cleanInstagram(input.instagram);
  return row;
};
/** Inserts leave out an empty Instagram (the column default is null anyway). */
const toInsert = (input: BrandInput) => {
  const row = toRow(input);
  if (!row.instagram) delete row.instagram;
  return row as BrandInput;
};

export async function listBrands(): Promise<Brand[]> {
  const { data, error } = await supabase().from('brands').select('*').order('name');
  if (error) fail(error);
  return data;
}

export async function createBrand(input: BrandInput): Promise<Brand> {
  const { data, error } = await supabase().from('brands').insert(toInsert(input)).select('*').single();
  if (error) fail(error);
  return data;
}

/** Name and contact details. Only the keys present are written; empty strings clear a field. */
export async function updateBrand(id: string, patch: Partial<BrandInput>): Promise<void> {
  const { error } = await supabase().from('brands').update(toRow(patch)).eq('id', id);
  if (error) fail(error);
}

/** Fails with 23503 while the brand still has deals (see errors.ts). */
export async function deleteBrand(id: string): Promise<void> {
  const { error } = await supabase().from('brands').delete().eq('id', id);
  if (error) fail(error, 'brand.delete');
}
