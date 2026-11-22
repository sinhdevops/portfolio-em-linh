import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BackLink } from '@/components/ui/BackLink';
import { PageSection } from '@/components/ui/PageSection';
import { getPortfolioCategory, portfolioCategories } from '@/content/portfolio';
import { ProjectGrid } from '@/features/portfolio/ProjectGrid';

import styles from './page.module.css';

type Params = { category: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return portfolioCategories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getPortfolioCategory(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
    openGraph: { images: [category.cover.src] },
  };
}

export default async function PortfolioCategoryPage({ params }: { params: Promise<Params> }) {
  const { category: slug } = await params;
  const category = getPortfolioCategory(slug);
  if (!category) notFound();

  return (
    <PageSection narrow className={styles.section}>
      <div className={styles.intro}>
        <h1 className={styles.title}>{category.title}</h1>
        <p className={styles.description}>{category.description}</p>
      </div>
      <ProjectGrid projects={category.projects} label={`${category.title} projects`} />
      <BackLink href="/my-portfolio" />
    </PageSection>
  );
}
