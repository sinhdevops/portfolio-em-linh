import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/cn';
import type { BlogPost } from '@/content/blog';

import styles from './BlogCard.module.css';

type BlogCardProps = {
  post: BlogPost;
  size?: 'large' | 'small';
  priority?: boolean;
};

export function BlogCard({ post, size = 'small', priority }: BlogCardProps) {
  return (
    <Link href={`/blogs/${post.slug}`} className={cn(styles.card, styles[size])} data-cursor="view">
      <div className={styles.media}>
        <div className={styles.imageWrapper}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority={priority}
            sizes={
              size === 'large'
                ? '(max-width: 767px) 100vw, 536px'
                : '(max-width: 767px) 100vw, 343px'
            }
          />
        </div>
        <span className={styles.overlay} aria-hidden="true" />
        <span className={styles.details} aria-hidden="true">
          View Details
          <svg viewBox="0 0 19 12" width="16" height="10" fill="none">
            <path
              fill="#262322"
              d="M1.5 5.25a.75.75 0 0 0 0 1.5zm16.53 1.28a.75.75 0 0 0 0-1.06L13.257.697a.75.75 0 0 0-1.06 1.06L16.439 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM1.5 6v.75h16v-1.5h-16z"
            />
          </svg>
        </span>
      </div>
      <div className={styles.meta}>
        <h2 className={styles.title}>{post.title}</h2>
        <span className={styles.badge}>{post.badge}</span>
      </div>
    </Link>
  );
}
