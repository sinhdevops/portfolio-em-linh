'use client';

import { m, useInView } from 'motion/react';
import { useRef, type CSSProperties, type ReactNode } from 'react';

import { tween, type RevealFrom } from '@/lib/motion';

type FloatLoopProps = {
  children: ReactNode;
  /** Offset the element drifts to and back from (mirrored, linear). */
  loop: RevealFrom;
  /** Seconds for one direction of the drift. */
  duration: number;
  /** Optional appear animation played once when scrolled into view. */
  enter?: RevealFrom;
  enterDelay?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Endless back-and-forth drift (Framer "Loop" effect, mirrored), paused while offscreen,
 * optionally combined with a one-off appear animation.
 */
export function FloatLoop({
  children,
  loop,
  duration,
  enter,
  enterDelay = 0.3,
  className,
  style,
}: FloatLoopProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const inner = (
    <m.div
      style={{ height: '100%' }}
      animate={inView ? loop : undefined}
      transition={{ duration, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
    >
      {children}
    </m.div>
  );

  if (!enter) {
    return (
      <div ref={ref} className={className} style={style}>
        {inner}
      </div>
    );
  }

  return (
    <m.div
      ref={ref}
      className={className}
      style={style}
      initial={enter}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={tween(0.6, enterDelay)}
    >
      {inner}
    </m.div>
  );
}
