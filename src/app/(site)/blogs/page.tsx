import type { Metadata } from 'next';

import { AppearOnLoad } from '@/components/motion/AppearOnLoad';
import { PageSection } from '@/components/ui/PageSection';
import { blogPosts } from '@/content/blog';
import { BlogList } from '@/features/blog/BlogList';
import { tween } from '@/lib/motion';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Ideas, strategies, and lessons about design, product thinking, and creating digital experiences.',
};

export default function BlogPage() {
  return (
    <PageSection>
      <div className={styles.intro}>
        <AppearOnLoad from={{ opacity: 0.001, y: 30 }} transition={tween(0.6)}>
          <h1 className={styles.title}>Design Insights &amp; Creative Thinking</h1>
        </AppearOnLoad>
        <AppearOnLoad from={{ opacity: 0.001, y: 30 }} transition={tween(0.6, 0.2)}>
          <p className={styles.lead}>
            Ideas, strategies, and lessons about design, product thinking, and creating digital
            experiences that help brands grow and connect with users.
          </p>
        </AppearOnLoad>
      </div>
      <BlogList posts={blogPosts} />
    </PageSection>
  );
}
