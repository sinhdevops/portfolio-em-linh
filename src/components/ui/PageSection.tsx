import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

import styles from './PageSection.module.css';

type PageSectionProps = {
  children: ReactNode;
  /** Narrow (880px) column used by article-style pages. */
  narrow?: boolean;
  className?: string;
  contentClassName?: string;
};

/** First section of inner pages: clears the header and holds the page content. */
export function PageSection({ children, narrow, className, contentClassName }: PageSectionProps) {
  return (
    <section className={cn(styles.section, className)}>
      <div className={cn(styles.content, narrow && styles.narrow, contentClassName)}>
        {children}
      </div>
    </section>
  );
}
