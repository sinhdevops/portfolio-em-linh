import { Reveal } from '@/components/motion/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { portfolioIntro } from '@/content/home';
import { portfolioCategories } from '@/content/portfolio';
import { CategoryCard } from '@/features/portfolio/CategoryCard';

import styles from './PortfolioShowcase.module.css';

export function PortfolioShowcase() {
  return (
    <Section id="portfolio">
      <SectionTitle tag={portfolioIntro.tag} title={portfolioIntro.title} maxWidth={434} />
      <ul className={styles.list}>
        {portfolioCategories.map((category) => (
          <Reveal key={category.slug} as="li" preset="fadeUp60" delay={0.1}>
            <CategoryCard category={category} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
