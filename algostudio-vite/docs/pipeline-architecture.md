# Payment pipeline: event flow

```
bank feed / email parser ──▶ ingest fn ──▶ matcher ──▶ payment_matches (insert)
                                                        │
                                   Supabase Realtime ◀──┘
                                          │
                              CashPipeline (client) ──▶ split / fall / review card
```

## 1. Ingest (edge function, one per provider)
- Normalise every credit to `{ bank_txn_id, amount, descriptor, received_at }`.
- `bank_txn_id` is unique. Insert with `on conflict do nothing` so a redelivered webhook is a no-op.

## 2. Match
- Tokenise the descriptor (strip `ACH DEP`, `NEFT CR`, `UPI/`, `CRDT`, `PVT`, `LTD`, `INTL`), then score each open deal: token overlap + Levenshtein on brand tokens + amount proximity to the remaining balance.
- Write the best candidate to `payment_matches(bank_txn_id, deal_id, amount, confidence, descriptor, received_at)`.
- Confidence ≥ 0.9: also insert into `payments` immediately (the ledger is the source of truth; the animation only shows it).
- 0.5–0.9: insert into `payment_matches` only. The payment is written when the creator confirms.
- Below 0.5: store unmatched for later; don't notify.

## 3. Partial payments
- No special type. A deal with `n = 16000` and one `payments` row of `8000` has `8000` remaining.
- The client calls `planPayment(invoice, amount)` to decide whether to split or settle. The server uses the same rule (±₹1 tolerance) to move the deal to `paid`.

## 4. Client contract
`PaymentMatchedEvent` in `src/features/pipeline/types.ts`. `createSupabaseSource` maps realtime rows onto it; `createLocalSource` drives `/lab`.

The client de-duplicates by `id` and plays one payment at a time, so bursts queue instead of colliding.
