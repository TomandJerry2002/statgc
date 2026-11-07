import type { SupabaseClient } from '@supabase/supabase-js';
import type { PaymentMatchedEvent } from './types';

export type PipelineHandler = (e: PaymentMatchedEvent) => void;
export interface PipelineEventSource { subscribe(h: PipelineHandler): () => void }

/** In-memory source for demos and tests. `emit` simulates the backend. */
export function createLocalSource() {
  const handlers = new Set<PipelineHandler>();
  return {
    subscribe(h: PipelineHandler) { handlers.add(h); return () => { handlers.delete(h); }; },
    emit(e: PaymentMatchedEvent) { handlers.forEach(h => h(e)); },
  };
}

/**
 * Live source: the matcher inserts into `payment_matches`; Supabase Realtime streams
 * each insert to the signed-in creator (row-level security scopes it to them).
 */
export function createSupabaseSource(sb: SupabaseClient): PipelineEventSource {
  return {
    subscribe(h) {
      const channel = sb
        .channel('payment-matches')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'payment_matches' }, payload => {
          const r = payload.new as Record<string, unknown>;
          h({
            type: 'payment.matched',
            id: String(r.bank_txn_id),
            invoiceId: String(r.deal_id),
            amount: Number(r.amount),
            confidence: Number(r.confidence),
            descriptor: String(r.descriptor),
            receivedAt: String(r.received_at),
          });
        })
        .subscribe();
      return () => { void sb.removeChannel(channel); };
    },
  };
}
