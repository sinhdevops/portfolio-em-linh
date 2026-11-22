'use client';

import { useState } from 'react';

import { Reveal } from '@/components/motion/Reveal';
import { PillButton } from '@/components/ui/PillButton';
import { BLOG_PAGE_SIZE, type BlogPost } from '@/content/blog';

import { BlogCard } from './BlogCard';
import styles from './BlogList.module.css';

/** Two featured posts, then a three-column grid that grows with "Load More". */
export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [count, setCount] = useState(BLOG_PAGE_SIZE);
  const featured = posts.slice(0, 2);
  const rest = posts.slice(2, count);
  const hasMore = count < posts.length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.featured}>
        {featured.map((post) => (
          <BlogCard key={post.slug} post={post} size="large" priority />
        ))}
      </div>
      <div className={styles.grid}>
        {rest.map((post) => (
          <Reveal key={post.slug} preset="fadeUp60" delay={0.1}>
            <BlogCard post={post} />
          </Reveal>
        ))}
        {hasMore && (
          <div className={styles.loadMore}>
            <PillButton type="button" onClick={() => setCount(posts.length)}>
              Load More
            </PillButton>
          </div>
        )}
      </div>
    </div>
  );
}
