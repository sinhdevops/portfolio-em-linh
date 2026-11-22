import Image from 'next/image';

import { AppearOnLoad } from '@/components/motion/AppearOnLoad';
import { hero } from '@/content/home';
import { linear, tween } from '@/lib/motion';

import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <AppearOnLoad from={{ y: 95 }} transition={tween(1)} className={styles.backdropWord}>
          <p aria-hidden="true">
            <span>{hero.backdropWord}</span>
          </p>
        </AppearOnLoad>

        <AppearOnLoad from={{ y: 170 }} transition={linear(0.6)} className={styles.portrait}>
          <Image
            src={hero.portrait.src}
            alt={hero.portrait.alt}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 767px) min(82vw, 320px), (max-width: 1199px) 420px, 535px"
          />
        </AppearOnLoad>

        <div className={styles.textWrapper}>
          <div className={styles.titleWrapper}>
            <AppearOnLoad from={{ opacity: 0.001, y: 30 }} transition={tween(0.6)}>
              <p className={styles.greeting}>{hero.greeting}</p>
            </AppearOnLoad>
            <AppearOnLoad from={{ opacity: 0.001, y: 30 }} transition={tween(0.6, 0.2)}>
              <h1 id="hero-title" className={styles.title}>
                {hero.title}
              </h1>
            </AppearOnLoad>
          </div>
          <div className={styles.overlay} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
