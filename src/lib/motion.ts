import type { Transition } from 'motion/react';

/** Easing used by almost every appear animation on the original site. */
export const EASE_FRAMER = [0.44, 0, 0.56, 1] as const;

export type RevealFrom = {
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
};

/** Starting states for scroll-triggered appear effects. */
export const revealPresets = {
  fadeUp: { opacity: 0, y: 30 },
  fadeUp24: { opacity: 0, y: 24 },
  fadeUp40: { opacity: 0, y: 40 },
  fadeUp50: { opacity: 0, y: 50 },
  fadeUp60: { opacity: 0, y: 60 },
  scaleIn: { opacity: 0, scale: 0.9 },
  popIn: { opacity: 0, scale: 0.7 },
} satisfies Record<string, RevealFrom>;

export type RevealPreset = keyof typeof revealPresets;

export function tween(
  duration: number,
  delay = 0,
  ease: Transition['ease'] = EASE_FRAMER,
): Transition {
  return { type: 'tween', duration, delay, ease };
}

export const linear = (duration: number, delay = 0) => tween(duration, delay, [0, 0, 1, 1]);
