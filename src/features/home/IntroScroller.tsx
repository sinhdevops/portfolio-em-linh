'use client';

import { m, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';

import { AppearOnLoad } from '@/components/motion/AppearOnLoad';
import { Chip } from '@/components/ui/Chip';
import { hero, heroStats } from '@/content/home';
import { tween } from '@/lib/motion';

import styles from './IntroScroller.module.css';
import { StatCard } from './StatCard';

/**
 * Wraps the Hero and About sections. On desktop the two counter cards start in the
 * hero and glide into the About section as the visitor scrolls through both sections.
 */
export function IntroScroller({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const firstX = useTransform(scrollYProgress, [0, 1], [0, -351]);
  const firstY = useTransform(scrollYProgress, [0, 1], [0, 831]);
  const secondX = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const secondY = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const [first, second] = heroStats;

  return (
    <div ref={ref} className={styles.intro}>
      {/* Rendered before the sections so the hero's blurred overlay can sit on top of them. */}
      <div className={styles.stats}>
        {first && (
          <m.div style={{ x: firstX, y: firstY }} className={styles.stat}>
            <StatCard stat={first} />
          </m.div>
        )}
        {second && (
          <m.div style={{ x: secondX, y: secondY }} className={styles.stat}>
            <StatCard stat={second} />
          </m.div>
        )}
      </div>

      <div className={styles.tags} aria-hidden="true">
        <AppearOnLoad
          className={`${styles.tag} ${styles.tagLeft}`}
          from={{ y: -135, rotate: 0 }}
          to={{ rotate: -26 }}
          transition={tween(1)}
        >
          <Chip>{hero.floatingTag}</Chip>
        </AppearOnLoad>
        <AppearOnLoad
          className={`${styles.tag} ${styles.tagRight}`}
          from={{ y: -135, rotate: 0 }}
          to={{ rotate: 15 }}
          transition={tween(1)}
        >
          <Chip>{hero.floatingTag}</Chip>
        </AppearOnLoad>
      </div>

      {children}
    </div>
  );
}
