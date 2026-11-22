'use client';

import { m } from 'motion/react';
import type { CSSProperties, ReactNode } from 'react';

import { revealPresets, tween, type RevealFrom, type RevealPreset } from '@/lib/motion';

const elements = {
  div: m.div,
  li: m.li,
  span: m.span,
  section: m.section,
  article: m.article,
} as const;

type RevealProps = {
  children: ReactNode;
  /** Named start state, or a custom one. */
  preset?: RevealPreset;
  from?: RevealFrom;
  duration?: number;
  delay?: number;
  as?: keyof typeof elements;
  className?: string;
  style?: CSSProperties;
};

/**
 * Plays an appear animation once, the first time the element enters the viewport
 * (equivalent of Framer's "Appear" effect with threshold 0 and "animate once").
 */
export function Reveal({
  children,
  preset = 'fadeUp',
  from,
  duration = 0.6,
  delay = 0,
  as = 'div',
  className,
  style,
}: RevealProps) {
  const Element = elements[as];
  const initial = from ?? revealPresets[preset];
  const target = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  };
  return (
    <Element
      className={className}
      style={style}
      initial={initial}
      whileInView={target}
      viewport={{ once: true, amount: 0 }}
      transition={tween(duration, delay)}
    >
      {children}
    </Element>
  );
}
