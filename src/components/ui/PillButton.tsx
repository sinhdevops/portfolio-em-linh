import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

import { ArrowIcon } from '@/components/icons';
import { cn } from '@/lib/cn';

import styles from './PillButton.module.css';

type Variant = 'dark' | 'light';
type Size = 'md' | 'lg';

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Points the arrow back (used by "Go Back" buttons). */
  back?: boolean;
  className?: string;
};

function Content({ children, back }: Pick<BaseProps, 'children' | 'back'>) {
  return (
    <>
      <span className={styles.label}>
        <span className={styles.labelTrack}>
          <span className={styles.labelText}>{children}</span>
          <span className={styles.labelText} aria-hidden="true">
            {children}
          </span>
        </span>
      </span>
      <span className={styles.icon} aria-hidden="true">
        <span className={styles.iconTrack}>
          <ArrowIcon className={cn(styles.arrow, back && styles.arrowBack)} />
          <ArrowIcon className={cn(styles.arrow, styles.arrowNext, back && styles.arrowBack)} />
        </span>
      </span>
    </>
  );
}

function classes({ variant = 'dark', size = 'md', className }: BaseProps) {
  return cn(styles.button, styles[variant], styles[size], className);
}

type PillLinkProps = BaseProps & Omit<ComponentProps<typeof Link>, 'children' | 'className'>;

/** Pill-shaped call-to-action link with the rolling label / sliding arrow hover. */
export function PillLink({ children, variant, size, back, className, ...rest }: PillLinkProps) {
  return (
    <Link className={classes({ children, variant, size, className })} {...rest}>
      <Content back={back}>{children}</Content>
    </Link>
  );
}

type PillButtonProps = BaseProps & Omit<ComponentProps<'button'>, 'children' | 'className'>;

export function PillButton({ children, variant, size, back, className, ...rest }: PillButtonProps) {
  return (
    <button className={classes({ children, variant, size, className })} {...rest}>
      <Content back={back}>{children}</Content>
    </button>
  );
}

/**
 * Non-interactive version for use inside another link (e.g. a whole clickable card).
 * It animates when the closest `[data-hover-group]` ancestor is hovered.
 */
export function PillDecoration({ children, variant, size, back, className }: BaseProps) {
  return (
    <span className={classes({ children, variant, size, className })}>
      <Content back={back}>{children}</Content>
    </span>
  );
}
