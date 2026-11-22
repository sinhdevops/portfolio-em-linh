'use client';

import { animate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

import styles from './AnimatedNumber.module.css';

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  className?: string;
};

/**
 * Counts from 0 to `value` every time the number scrolls into view
 * (spring, 1s, no bounce — same as the original counter).
 */
export function AnimatedNumber({ value, suffix = '', className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 'some' });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!inView) {
      node.textContent = `0${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      type: 'spring',
      duration: 1,
      bounce: 0,
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return (
    <span className={`${styles.number} ${className ?? ''}`}>
      {/* Reserves the final width so the layout never jumps. */}
      <span className={styles.sizer} aria-hidden="true">
        {value}
        {suffix}
      </span>
      <span ref={ref} className={styles.live} aria-label={`${value}${suffix}`}>
        {value}
        {suffix}
      </span>
    </span>
  );
}
