// Liquid Obsidian palette and the motion presets every Algostudio surface shares.
import type { Transition } from 'framer-motion';

export const ink = {
  canvas: '#0A0A0C',        // Liquid Obsidian: page background
  card: '#141418',          // Obsidian Card: containers
  cardHi: '#1C1C22',        // raised surfaces inside a card
  line: 'rgba(255,255,255,0.08)',
  text: '#F5F5F7',
  muted: '#A1A1AA',         // 7.4:1 on card
  green: '#00FF66',         // Volcanic Green: money and momentum only
  greenDim: 'rgba(0,255,102,0.14)',
  ember: '#FF4D5E',         // warning accent, used only by the Exploitation Shield
  emberDim: 'rgba(255,77,94,0.14)',
} as const;

/** Snappy, slightly underdamped. For things that break or pop apart. */
export const springSnap: Transition = { type: 'spring', stiffness: 520, damping: 24, mass: 0.9 };
/** Heavier and slower. For liquid settling back into place. */
export const springLiquid: Transition = { type: 'spring', stiffness: 260, damping: 22, mass: 1.1 };
/** Sharp and critically damped. For markers that must land precisely. */
export const springSharp: Transition = { type: 'spring', stiffness: 420, damping: 34 };
/** Strong ease-out for UI that responds to a tap. */
export const easeOut = [0.23, 1, 0.32, 1] as const;
/** Ease-in for falling objects: slow start, accelerating finish. */
export const easeFall = [0.55, 0, 0.9, 0.35] as const;

export const wait = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
