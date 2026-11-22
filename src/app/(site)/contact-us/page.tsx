import type { Metadata } from 'next';

import { AppearOnLoad } from '@/components/motion/AppearOnLoad';
import { Reveal } from '@/components/motion/Reveal';
import { contactPage } from '@/content/contact';
import { contact } from '@/content/site';
import { ContactForm } from '@/features/contact/ContactForm';
import { tween } from '@/lib/motion';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with MyLink about a project idea or collaboration.',
};

const details = [
  { kind: 'phone', label: contact.phone, href: contact.phoneHref },
  { kind: 'email', label: contact.email, href: `mailto:${contact.email}` },
  { kind: 'address', label: contact.addressLocal, href: contact.mapUrl },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <AppearOnLoad from={{ opacity: 0.001, y: 30 }} transition={tween(0.6)}>
          <h1 className={styles.title}>{contactPage.title}</h1>
        </AppearOnLoad>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoHeading}>
              <Reveal duration={0.7} delay={0.2}>
                <h2 className={styles.heading}>{contactPage.intro.title}</h2>
              </Reveal>
              <Reveal duration={0.7} delay={0.3}>
                <p className={styles.infoText}>{contactPage.intro.text}</p>
              </Reveal>
            </div>
            <span className={styles.stroke} aria-hidden="true" />
            <Reveal duration={0.7} delay={0.4} className={styles.detailsWrapper}>
              <ul className={styles.details}>
                {details.map((item) => (
                  <li key={item.kind} className={styles.detail} data-kind={item.kind}>
                    {item.kind === 'address' ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className={styles.card}>
            <Reveal duration={0.7} delay={0.2} className={styles.cardHeading}>
              <h2 className={styles.heading}>{contactPage.form.title}</h2>
              <p className={styles.cardText}>{contactPage.form.text}</p>
            </Reveal>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
