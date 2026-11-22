import type { CSSProperties } from 'react';

import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';

import { SectionTag } from './SectionTag';
import styles from './SectionTitle.module.css';

type SectionTitleProps = {
  tag: string;
  title: string;
  /** Maximum width of the heading, matching the original line breaks. */
  maxWidth: number;
  tone?: 'default' | 'onDark';
  className?: string;
};

/** Centered eyebrow + H2 used at the top of most sections. Both fade up on scroll. */
export function SectionTitle({
  tag,
  title,
  maxWidth,
  tone = 'default',
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Reveal preset="fadeUp">
        <SectionTag tone={tone}>{tag}</SectionTag>
      </Reveal>
      <Reveal preset="fadeUp" delay={0.2}>
        <h2
          className={cn(styles.title, tone === 'onDark' && styles.onDark)}
          style={{ '--title-max': `${maxWidth}px` } as CSSProperties}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
