import type { Metadata } from 'next';
import Image from 'next/image';

import { SiteShell } from '@/components/layout/SiteShell';
import { PillLink } from '@/components/ui/PillButton';

import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image
              src="/images/misc/not-found.webp"
              alt="404"
              fill
              priority
              sizes="(max-width: 900px) 92vw, 831px"
            />
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>Page Not Found</h1>
            <p className={styles.description}>
              The page you are looking for doesn’t exist or may have been moved.
            </p>
          </div>
          <PillLink href="/">Go Back Home</PillLink>
        </div>
      </section>
    </SiteShell>
  );
}
