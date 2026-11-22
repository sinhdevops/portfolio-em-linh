import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

import styles from './Section.module.css';

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  contentClassName?: string;
};

/** Full-width home page section with the centered 1140px column. */
export function Section({ children, id, className, contentClassName }: SectionProps) {
  return (
    <section id={id} className={cn(styles.section, className)}>
      <div className={cn(styles.content, contentClassName)}>{children}</div>
    </section>
  );
}
