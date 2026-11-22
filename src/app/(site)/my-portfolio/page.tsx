import type { Metadata } from 'next';

import { AppearOnLoad } from '@/components/motion/AppearOnLoad';
import { Reveal } from '@/components/motion/Reveal';
import { PageSection } from '@/components/ui/PageSection';
import { portfolioCategories } from '@/content/portfolio';
import { CategoryCard } from '@/features/portfolio/CategoryCard';
import { tween } from '@/lib/motion';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Web design, app design, design system and AI film creation tool projects by MyLink.',
};

export default function PortfolioPage() {
  return (
    <PageSection>
      <div className={styles.intro}>
        <AppearOnLoad from={{ opacity: 0.001, y: 30 }} transition={tween(0.6)}>
          <h1 className={styles.title}>Design Moves Brands Forward</h1>
        </AppearOnLoad>
        <AppearOnLoad from={{ opacity: 0.001, y: 30 }} transition={tween(0.6, 0.2)}>
          <p className={styles.lead}>
            Thoughts, perspectives, and ideas shaping modern brands and digital experiences.
          </p>
        </AppearOnLoad>
      </div>
      <ul className={styles.list}>
        {portfolioCategories.map((category) => (
          <Reveal key={category.slug} as="li" preset="fadeUp60" delay={0.1}>
            <CategoryCard category={category} />
          </Reveal>
        ))}
      </ul>
    </PageSection>
  );
}
