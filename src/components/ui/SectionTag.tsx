import { SparkleIcon } from '@/components/icons';
import { cn } from '@/lib/cn';

import styles from './SectionTag.module.css';

type SectionTagProps = {
  children: string;
  /** `onDark` is used on the navy backgrounds (white mark, light text). */
  tone?: 'default' | 'onDark';
  className?: string;
};

/** Small "✿ Label" eyebrow placed above section titles. */
export function SectionTag({ children, tone = 'default', className }: SectionTagProps) {
  return (
    <p className={cn(styles.tag, tone === 'onDark' && styles.onDark, className)}>
      <SparkleIcon className={styles.mark} />
      {children}
    </p>
  );
}
