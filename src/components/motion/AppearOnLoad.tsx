'use client';

import { m, type Transition } from 'motion/react';
import type { CSSProperties, ReactNode } from 'react';

import type { RevealFrom } from '@/lib/motion';

type AppearOnLoadProps = {
  children?: ReactNode;
  from: RevealFrom;
  /** End state; defaults to the element's natural position. */
  to?: RevealFrom;
  transition: Transition;
  className?: string;
  style?: CSSProperties;
};

/** Plays once when the page loads (Framer "appear" animations in the first viewport). */
export function AppearOnLoad({
  children,
  from,
  to,
  transition,
  className,
  style,
}: AppearOnLoadProps) {
  return (
    <m.div
      className={className}
      style={style}
      initial={from}
      animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, ...to }}
      transition={transition}
    >
      {children}
    </m.div>
  );
}
