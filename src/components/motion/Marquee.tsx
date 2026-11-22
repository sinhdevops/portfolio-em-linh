import type { CSSProperties, ReactNode } from 'react';

import { cn } from '@/lib/cn';

import styles from './Marquee.module.css';

type MarqueeProps = {
  children: ReactNode;
  /** Seconds to scroll one full copy of the content. Can be overridden per breakpoint with `--marquee-duration`. */
  duration: number;
  /** Gap between items in pixels. Can be overridden with `--marquee-gap`. */
  gap: number;
  pauseOnHover?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Infinite horizontal ticker. Pure CSS: the content is rendered twice and the track
 * slides by exactly one copy, so it loops seamlessly with no JavaScript.
 */
export function Marquee({
  children,
  duration,
  gap,
  pauseOnHover = false,
  className,
  ariaLabel,
}: MarqueeProps) {
  const style = {
    '--marquee-duration-default': `${duration}s`,
    '--marquee-gap-default': `${gap}px`,
  } as CSSProperties;

  return (
    <div
      className={cn(styles.viewport, pauseOnHover && styles.pausable, className)}
      style={style}
      role={ariaLabel ? 'region' : undefined}
      aria-label={ariaLabel}
      tabIndex={ariaLabel ? 0 : undefined}
    >
      <div className={styles.track}>
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
