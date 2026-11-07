const browserZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

const ymd = (timeZone: string) =>
  new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

/**
 * Today's date as YYYY-MM-DD in the given IANA timezone
 * (profiles.timezone). Falls back to the browser's timezone when the
 * profile has none, or if the name is not one this browser knows.
 */
export function todayIn(timeZone?: string | null): string {
  if (timeZone) {
    try { return ymd(timeZone); } catch (e) { console.error('Unknown timezone', timeZone, e); }
  }
  return ymd(browserZone());
}
