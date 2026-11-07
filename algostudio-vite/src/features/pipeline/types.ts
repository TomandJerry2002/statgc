/** An invoice that is still waiting for money. `paid` grows as partial payments land. */
export interface Invoice {
  id: string;
  brand: string;
  total: number;
  paid: number;
}

/** Emitted by the backend after the fuzzy matcher pairs a bank credit with an invoice. */
export interface PaymentMatchedEvent {
  type: 'payment.matched';
  id: string;              // bank transaction id, used for idempotency
  invoiceId: string;
  amount: number;
  confidence: number;      // 0..1 from the token/Levenshtein matcher
  descriptor: string;      // raw bank string, e.g. "ACH DEP: NIKE INTL CRDT"
  receivedAt: string;      // ISO timestamp
}

/** What a payment does to an invoice. Computed on the client from the event. */
export type PaymentPlan =
  | { kind: 'full'; paid: number; extra: number }
  | { kind: 'partial'; paid: number; remaining: number; ratio: number };

/** How the pipeline should react to an event, based on match confidence. */
export type ConfidenceTier = 'auto' | 'review' | 'ignore';
