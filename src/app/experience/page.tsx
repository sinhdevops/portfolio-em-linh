import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { navigation } from '@/content/site';
import { experiencePage, jobs } from '@/content/experience';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Work experience of Tran Thi My Linh, UX/UI Designer.',
};

/** Standalone résumé-style page with its own light header and footer. */
export default function ExperiencePage() {
  return (
    <div className={styles.page}>
      <header className={`${styles.wrap} ${styles.header}`}>
        <nav className={styles.nav} aria-label="Main">
          <div className={styles.navLeft}>
            <Link className={styles.logo} href="/" aria-label="MyLink home">
              <Image
                src="/images/brand/mylink-logo.webp"
                alt="MyLink"
                width={150}
                height={52}
                priority
              />
            </Link>
            <div className={styles.links}>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={item.href === '/experience' ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link className={styles.cta} href="/contact-us">
            <span>Get In Touch</span>
            <i aria-hidden="true">→</i>
          </Link>
        </nav>
      </header>

      <main className={styles.wrap}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{experiencePage.eyebrow}</p>
          <h1 className={styles.title}>{experiencePage.title}</h1>
          <p className={styles.lead}>{experiencePage.lead}</p>
        </section>

        <section className={styles.list}>
          {jobs.map((job) => (
            <article key={job.company} className={styles.job}>
              <div>
                <div className={styles.when}>{job.period}</div>
                <span className={styles.role}>{job.role}</span>
              </div>
              <div>
                <h2 className={styles.company}>{job.company}</h2>
                {job.summary && <p className={styles.summary}>{job.summary}</p>}
                <ul className={styles.highlights}>
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {job.projects && (
                  <div className={styles.projects}>
                    {job.projects.map((project) => (
                      <span key={project}>{project}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>{experiencePage.footer}</div>
      </footer>
    </div>
  );
}
