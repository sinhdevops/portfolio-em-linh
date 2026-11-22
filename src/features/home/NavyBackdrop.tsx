'use client';

import { m, useMotionValueEvent, useScroll } from 'motion/react';
import { useRef, useState, type ReactNode } from 'react';

import { tween } from '@/lib/motion';

import styles from './NavyBackdrop.module.css';

/**
 * Wraps the Services and Experience sections. A blurred navy glow fades in once the
 * wrapper reaches the middle of the viewport, and fades out again when scrolling back up.
 */
export function NavyBackdrop({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'start start'] });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => setActive(progress > 0));

  return (
    <div ref={ref} className={styles.wrapper}>
      <m.div
        className={styles.glow}
        aria-hidden="true"
        initial={false}
        animate={
          active ? { opacity: 1, filter: 'blur(100px)' } : { opacity: 0, filter: 'blur(110px)' }
        }
        transition={tween(0.7)}
      />
      {children}
    </div>
  );
}
