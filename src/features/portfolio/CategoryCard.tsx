import Image from 'next/image';
import Link from 'next/link';

import { PillDecoration } from '@/components/ui/PillButton';
import type { PortfolioCategory } from '@/content/portfolio';

import styles from './CategoryCard.module.css';

/** Large clickable card for a portfolio category (home page and portfolio overview). */
export function CategoryCard({ category }: { category: PortfolioCategory }) {
  return (
    <Link
      href={`/my-portfolio/${category.slug}`}
      className={styles.card}
      data-hover-group
      data-cursor="view"
    >
      <div className={styles.top}>
        <h3 className={styles.title}>{category.title}</h3>
        <p className={styles.number} aria-hidden="true">
          {category.number}
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.text}>
          <p className={styles.summary}>{category.summary}</p>
          <PillDecoration>Explore Project</PillDecoration>
        </div>
        <div className={styles.media}>
          <div className={styles.imageWrapper}>
            <Image
              src={category.cover.src}
              alt={category.cover.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 90vw, 460px"
            />
          </div>
          <div className={styles.overlay} aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
