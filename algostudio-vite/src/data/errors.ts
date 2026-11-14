import type { PostgrestError } from '@supabase/supabase-js';

/** What the app was doing when the error happened. Picks the message. */
export type Action = 'brand.delete' | 'deal.save' | 'deal.delete' | 'other';

const GENERIC = 'Something went wrong. Please try again.';

/** An error with a message that is safe to show the user. */
export class DataError extends Error {
  constructor(message: string, cause: unknown) {
    super(message, { cause });
    this.name = 'DataError';
  }
}

function messageFor(error: PostgrestError, action: Action): string {
  // Foreign key: the brand still has deals pointing at it.
  if (error.code === '23503' && action === 'brand.delete') return 'This brand has deals. Delete or move them first.';
  // Check constraint deals_not_agreed_and_declined.
  if (error.code === '23514' && action === 'deal.save' && error.message.includes('deals_not_agreed_and_declined'))
    return "A deal can't be both agreed and declined. Clear one of the dates.";
  return GENERIC;
}

/** Logs the full Supabase error and throws a DataError with a friendly message. */
export function fail(error: PostgrestError, action: Action = 'other'): never {
  console.error(`[${action}]`, error);
  throw new DataError(messageFor(error, action), error);
}

/** Same as fail() for Storage errors (they carry no Postgres code). */
export function failStorage(error: Error, message = GENERIC): never {
  console.error('[storage]', error);
  throw new DataError(message, error);
}

/** The message to show for anything a data call threw. */
export function userMessage(e: unknown): string {
  if (e instanceof DataError) return e.message;
  console.error(e);
  return GENERIC;
}
