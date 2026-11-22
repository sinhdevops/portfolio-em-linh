import type { CSSProperties, ReactNode } from 'react';

import { cn } from '@/lib/cn';

import styles from './Chip.module.css';

type ChipProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** Rounded grey label ("Web design", "Interface Design", …). */
export function Chip({ children, className, style }: ChipProps) {
  return (
    <span className={cn(styles.chip, className)} style={style}>
      {children}
    </span>
  );
}
