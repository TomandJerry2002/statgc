// One haptics call for web and native. Android Chrome supports navigator.vibrate;
// iOS Safari does not, so the native shell (Capacitor) provides the real "thud".
type Kind = 'thud' | 'tick' | 'warn';

const WEB_PATTERN: Record<Kind, number | number[]> = { thud: 28, tick: 8, warn: [12, 48, 12] };
const NATIVE_STYLE: Record<Kind, string> = { thud: 'HEAVY', tick: 'LIGHT', warn: 'MEDIUM' };

export function haptic(kind: Kind) {
  const native = (window as unknown as { Capacitor?: { Plugins?: { Haptics?: { impact(o: { style: string }): void } } } })
    .Capacitor?.Plugins?.Haptics;
  if (native) return native.impact({ style: NATIVE_STYLE[kind] });
  try { navigator.vibrate?.(WEB_PATTERN[kind]); } catch { /* not allowed before a user gesture */ }
}
