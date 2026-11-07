# Browser test checklist (Phases 4 and 5)

**Setup:** in `web/algostudio-vite`, run `npm run dev` and open `http://localhost:5173`. You need two Google accounts:
- **A** in a normal browser window
- **B** in a private/incognito window, so the two sessions don't mix

Keep the browser console open (F12). Any red error is worth noting.

## 1. Website and login
- [ ] `/` loads, and the "Inside the app" preview shows the demo brands (Mamaearth, boAt…) with the same statuses as before. It uses the fixed demo date 2026-11-04.
- [ ] On the website, the Network tab shows **no** requests to `supabase.co`.
- [ ] Opening `/app` while logged out goes straight to `/login`. You may see a brief spinner, but never the app itself.
- [ ] `/login` shows only "Continue with Google". There's no phone field and no code.
- [ ] **A** signs in with Google and lands on `/app` without the login card flashing.
- [ ] The greeting says "Good morning, \<A's first name\>".
- [ ] Settings shows A's name and Google email.
- [ ] In the Supabase dashboard, `profiles` has a row for A with `full_name` filled in and `timezone = Asia/Kolkata`.
- [ ] Visiting `/login` while signed in sends you to `/app`.

## 2. Empty state (new account)
- [ ] Home shows the "add a brand / new deal" empty state, with no money blocks and no insights.
- [ ] Deals, Money and Brands show their "No … yet" messages.

## 3. Brands
- [ ] Add a brand with a name, phone and email. It appears in the list after the "Brand added" toast.
- [ ] Add a brand with an invalid email. The form's own error appears and nothing is saved.
- [ ] Delete a brand that has no deals. It's removed after the confirm step.

## 4. Deals and status
- [ ] **New deal** for a brand that doesn't exist yet. The brand is created too.
- [ ] The status chip in the form reads "Draft offer". Changing dates updates it within about a second. This is the server preview (`compute_deal_status`).
- [ ] Set both Agreed and Declined. Save is disabled, and the two date fields turn red.
- [ ] Save as a draft. The row shows "Draft offer" and a **Send offer** button.
- [ ] Click **Send offer**, then "Copy & mark offer sent".
  - The status becomes "Offer sent" with the button "Send reminder".
  - The deal appears on Home under "Deals waiting for brand reply".
- [ ] Mark reminded. The status becomes "Offer follow-up" with the text "Await reply", and the deal is still waiting.
- [ ] Edit the deal and set the Agreed date.
  - It becomes "Agreed / Active" with "Create payment schedule".
  - It leaves the waiting list.
- [ ] Deal filter chips (Draft, Sent, Follow-up, Active, Closed) and search all work.
- [ ] Try deleting a brand that has deals. The "Can't delete" dialog appears.

## 5. Payments and receipts
- [ ] Create a payment schedule on a **USD** deal. In Supabase, `payments.currency` is `USD`, not `INR`.
- [ ] Add a payment with a due date in the past. It shows "Overdue". One due in the future shows "Due \<date\>".
- [ ] **Record payment received** with a partial amount:
  - Skip the screenshot for now (section 9 covers it).
  - The date defaults to today in IST.
  - Progress reads "X of Y received · Z remaining".
- [ ] In Supabase, `payment_receipts.received_on` is today's IST date.
- [ ] Record the rest of the amount. The payment shows "Fully paid", and the deal shows "Done" and "1 of 1 payments settled".
- [ ] **Mark as disputed**, then **Undo**. `disputed_on` is set to today, then goes back to null.
- [ ] **Write off**, then **Undo**. Same check for `written_off_on`.
- [ ] Cancel a deal that has payments (set its Cancelled date). In Money, its payments still show, with "· Deal cancelled".

## 6. Money totals
- [ ] There's one block per currency (INR and USD separately), never added together.
- [ ] The numbers match A's own data. Don't compare against `money_summary` in the SQL editor: it runs as `postgres`, which skips RLS, so it adds up every user's payments. Check against A's rows in the Table Editor instead.
- [ ] The Disputed line reads "Of which disputed".
- [ ] "N payments owed" excludes payments that are written off, fully paid, or on a cancelled deal.
- [ ] Deal detail shows "N payments" in place of the ₹ scheduled/received line. Orbit shows "—" for Earned and Usually pays.

## 7. Two-account isolation (most important)
- [ ] **B** signs in from the private window and sees an empty app. None of A's brands, deals, payments or totals appear.
- [ ] B creates a brand named the same as one of A's brands. It's a separate brand. A's list doesn't change after a refresh.
- [ ] B's money totals show only B's data, and A's are unchanged.
- [ ] In Supabase, B's rows have B's `user_id`. The app never sends `user_id`, so the database filled it in.
- [ ] Receipt screenshot isolation is tested in section 9.

## 8. Session and errors
- [ ] Settings → **Log out** goes back to `/login`. After that, `/app` redirects to login.
- [ ] Change your name in Settings, wait a second, then reload. The new name stays, and the greeting updates.
- [ ] With the network offline (DevTools → Offline), saving a deal shows "Something went wrong. Please try again." and the console has the full error.
- [ ] Reloading `/app` while offline shows the error screen with **Try again**.

## 9. Receipt screenshots (Phase 5)

### As A (normal window)
- [ ] Record a payment with a PNG screenshot. The drawer shows a thumbnail with a "Private" label. Clicking the thumbnail opens the full image in a new tab.
- [ ] In the Supabase Table Editor, `payment_receipts.screenshot_path` looks like `<A's id>/<uuid>.png`. It's a path, not a URL.
- [ ] Storage → `receipts` has the file in A's folder. **Copy that path** for the console checks below.
- [ ] Picking a PDF, or an image over 5 MB, shows an error in the form. Nothing appears in Storage.
- [ ] Copy the full-size image link from its tab, wait more than a minute, then reload it. It now says the link has expired.

### As B (private window), in the browser console (F12)
These console commands only work with `npm run dev` running. Set up once:
```js
const { supabase } = await import('/src/lib/supabase.ts'); const sb = supabase();
const P = '<A path>', A = P.split('/')[0];
const me = (await sb.auth.getUser()).data.user.id;
```

**Control check first:** B can upload to B's own folder. This proves that the failures below come from the access rules (RLS), not from a broken upload.
- [ ] `await sb.storage.from('receipts').upload(me + '/control.png', new Blob(['x'], { type: 'image/png' }))` succeeds (`error: null`). The file shows in Storage under B's folder.

**B can't read, list, upload into, or delete from A's folder:**
- [ ] `await sb.storage.from('receipts').createSignedUrl(P, 60)` returns an **error** and no URL.
- [ ] `await sb.storage.from('receipts').download(P)` returns an **error**.
- [ ] `await sb.storage.from('receipts').list(A)` returns an **empty list**.
- [ ] `await sb.storage.from('receipts').upload(A + '/test.png', new Blob(['x'], { type: 'image/png' }))` returns an **error** (row-level security).
- [ ] `await sb.storage.from('receipts').remove([P])` deletes nothing. A's thumbnail still loads after A refreshes.
- [ ] Try to point one of B's own receipts at A's file: `await sb.from('payment_receipts').update({ screenshot_path: P }).eq('id', '<B receipt id>')` returns **error 23514** (check constraint).
- [ ] Open the link from `sb.storage.from('receipts').getPublicUrl(P).data.publicUrl` in a new tab. It **fails**, because the bucket is private.

**Server-side limits (only after the bucket-limits migration is pushed).** These uploads go to B's own folder, so any rejection comes from the bucket settings, not RLS:
- [ ] PDF: `await sb.storage.from('receipts').upload(me + '/test.pdf', new Blob(['%PDF-1.4'], { type: 'application/pdf' }))` returns an **error** (mime type not allowed).
- [ ] Over 5 MB: `await sb.storage.from('receipts').upload(me + '/big.png', new Blob([new Uint8Array(6 * 1024 * 1024)], { type: 'image/png' }))` returns an **error** (file too large).
- [ ] Neither file shows up in Storage under B's folder.
- [ ] Clean up the control file: `await sb.storage.from('receipts').remove([me + '/control.png'])`.

### As A again
- [ ] Delete the receipt with the trash button and confirm. The row disappears, and the file is gone from Storage → `receipts`.

When you've run through it, note anything that failed, along with the console error if there was one.
