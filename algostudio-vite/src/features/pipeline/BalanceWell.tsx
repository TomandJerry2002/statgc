import { AnimatePresence, motion, useAnimationControls, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, type Ref } from 'react';
import { haptic } from '../haptics';
import { formatMoney } from '../money';
import { ink } from '../theme';

interface Props {
  balance: number;
  impactKey: number;                 // increment to trigger a landing
  ref?: Ref<HTMLDivElement>;         // React 19: ref as a prop. Payloads fly to this element.
}

/**
 * The creator's live balance. When a payload lands it compresses like liquid taking
 * a heavy drop, sends out one ripple, fires a heavy haptic, and the number rolls up.
 */
export function BalanceWell({ balance, impactKey, ref }: Props) {
  const reduce = useReducedMotion();
  const controls = useAnimationControls();
  const [ripples, setRipples] = useState<number[]>([]);

  // The number chases the real balance on a spring, so increases roll rather than jump.
  const spring = useSpring(balance, { stiffness: 90, damping: 20 });
  const text = useTransform(spring, v => formatMoney(v));
  useEffect(() => { spring.set(balance); }, [balance, spring]);

  useEffect(() => {
    if (impactKey === 0) return;
    haptic('thud');
    if (reduce) return;
    void controls.start({
      scaleY: [1, 0.9, 1.04, 1],
      scaleX: [1, 1.05, 0.99, 1],
      y: [0, 5, -1, 0],
      transition: { duration: 0.5, times: [0, 0.18, 0.55, 1], ease: 'easeOut' },
    });
    setRipples(r => [...r, impactKey]);
  }, [impactKey, controls, reduce]);

  return (
    <div className="relative flex flex-col items-center gap-1 pt-2 pb-6">
      <span className="text-[14px] font-semibold" style={{ color: ink.muted }}>Your balance</span>
      <div ref={ref} className="relative grid place-items-center px-6 py-2">
        <AnimatePresence>
          {ripples.map(k => (
            <motion.span
              key={k}
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{ border: `2px solid ${ink.green}` }}
              initial={{ scale: 0.6, opacity: 0.55 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              onAnimationComplete={() => setRipples(r => r.filter(x => x !== k))}
            />
          ))}
        </AnimatePresence>
        <motion.span
          animate={controls}
          className="relative text-[44px] font-extrabold tracking-tight tabular-nums"
          style={{ color: ink.text, transformOrigin: '50% 100%', textShadow: '0 0 32px rgba(0,255,102,0.25)' }}
          aria-live="polite"
        >
          {text}
        </motion.span>
      </div>
    </div>
  );
}
