import { AnimatedNumber } from '@/components/motion/AnimatedNumber';
import type { Stat } from '@/content/home';

import styles from './StatCard.module.css';

export function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className={styles.card}>
      <p className={styles.label}>{stat.label}</p>
      <AnimatedNumber className={styles.value} value={stat.value} suffix={stat.suffix} />
    </div>
  );
}
