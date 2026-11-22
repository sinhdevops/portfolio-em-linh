import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { AppearOnLoad } from '@/components/motion/AppearOnLoad';
import { Reveal } from '@/components/motion/Reveal';
import { BackLink } from '@/components/ui/BackLink';
import { PageSection } from '@/components/ui/PageSection';
import { blogPosts, getBlogPost, type BlogBlock } from '@/content/blog';
import { tween } from '@/lib/motion';

import styles from './page.module.css';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { type: 'article', images: [post.image] },
  };
}

const rise = { opacity: 0.001, y: 30 };

function Block({ block }: { block: BlogBlock }) {
  if (!block.text) {
    return (
      <span
        className={block.type === 'heading' ? styles.headingSpacer : styles.spacer}
        aria-hidden="true"
      />
    );
  }
  if (block.type === 'heading') return <h2 className={styles.heading}>{block.text}</h2>;
  return <p className={styles.paragraph}>{block.text}</p>;
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <PageSection narrow className={styles.section} contentClassName={styles.content}>
      <article className={styles.article}>
        <div className={styles.top}>
          <header className={styles.header}>
            <AppearOnLoad from={rise} transition={tween(0.6, 0.1)}>
              <p className={styles.category}>{post.category}</p>
            </AppearOnLoad>
            <div className={styles.titleGroup}>
              <AppearOnLoad from={rise} transition={tween(0.6, 0.2)}>
                <h1 className={styles.title}>{post.title}</h1>
              </AppearOnLoad>
              <AppearOnLoad from={rise} transition={tween(0.6, 0.3)}>
                <p className={styles.description}>{post.description}</p>
              </AppearOnLoad>
            </div>
          </header>
          <Reveal preset="scaleIn" duration={0.7} delay={0.3} className={styles.cover}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 940px) 100vw, 880px"
            />
          </Reveal>
        </div>
        <Reveal delay={0.1} className={styles.body}>
          {post.body.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </Reveal>
      </article>
      <BackLink href="/blogs" />
    </PageSection>
  );
}
