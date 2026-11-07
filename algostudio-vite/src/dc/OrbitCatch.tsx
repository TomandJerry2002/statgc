// React wrapper for the <orbit-catch> web component used on the StatGC app's Brands → Orbit view.
import { createElement, useEffect, useRef } from 'react';
import '../vendor/orbit-catch.js';

export function OrbitCatch({ tokens, __hostStyle }: { tokens?: unknown; __hostStyle?: React.CSSProperties }) {
  const ref = useRef<HTMLElement & { tokens?: unknown }>(null);
  useEffect(() => { if (ref.current) ref.current.tokens = tokens; }, [tokens]);
  return createElement('orbit-catch', { ref, style: { display: 'block', ...__hostStyle } });
}
