# Backend TODO (from Phase 4)

These are parts of the design that the V1 backend can't support yet. In the live app (`/app`) they are hidden or show "—". The website's demo preview still shows them using seed data. No backend changes were made in Phase 4.

## Hidden: the frontend would have to add up money

| Where | What the design shows | Backend that would replace it |
|---|---|---|
| Home → Insights | Share of payments that arrived on time, total overdue across payments with the oldest one named, top-paying brand by money received | A per-user insights view or RPC (on-time ratio, oldest overdue payment, received per brand per currency) |
| Brands → Orbit → "Earned" | Money received from the brand, per currency | `brand_summary` view: received per brand per currency |
| Brands → Orbit → "Usually pays" | Average days late for fully paid payments | Same view: average of (last receipt date − due date) for fully paid payments |
| Deal detail → payments subtitle | "₹X scheduled · ₹Y received" (the live app shows "N payments") | Add `scheduled_amount` and `received_amount` to `deals_with_status`, or a `deal_money` view |
| Add payment form | "₹X of the ₹Y deal is not scheduled yet" | Same as the line above (`offer_amount − scheduled_amount`) |

## Kept in session memory only: no database column

These reset when the page reloads.

| Where | Field |
|---|---|
| Settings → Profile | Handle, phone. Email is prefilled from the Google account but not saved. |
| Settings → Preferences | Default currency, payment terms (days), starting tone for reminders, message sign-off |
| Messages | Saved message templates, per phase and tone |

`profiles.full_name` is saved (from the Settings name field). `profiles.timezone` is read but can't be edited in the app.

## In the database but no input in the design

Optional columns. Nothing writes them yet.

- `brands.contact_person`, `brands.upi_id`
- `deals.notes`
- `payments.invoice_number`, `payments.invoice_sent_on`

## Phase 5

- Receipt screenshots: upload to the private `receipts` bucket at `<user_id>/…`, save `payment_receipts.screenshot_path`, and show them with signed URLs. The picker is hidden in the live app until then.
