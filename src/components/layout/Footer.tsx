import Image from 'next/image';
import Link from 'next/link';

import { MailIcon, MapPinIcon, PhoneIcon } from '@/components/icons';
import { Reveal } from '@/components/motion/Reveal';
import { PillLink } from '@/components/ui/PillButton';
import { contact, site, socialLinks } from '@/content/site';

import styles from './Footer.module.css';

const rise = { opacity: 0, y: 34 };

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.titleWrapper}>
            <Reveal from={rise}>
              <h2 className={styles.title}>
                Got a project in mind?
                <br />
                Let&apos;s build it together.
              </h2>
            </Reveal>
            <Reveal from={rise} delay={0.1}>
              <PillLink href="/contact-us" variant="light" size="lg">
                Get In Touch
              </PillLink>
            </Reveal>
          </div>

          <Reveal from={rise} delay={0.3} className={styles.cards}>
            <a className={styles.card} href={`mailto:${contact.email}`}>
              <MailIcon className={styles.cardIcon} />
              <p>{contact.email}</p>
            </a>
            <a className={styles.card} href={contact.phoneHref}>
              <PhoneIcon className={styles.cardIcon} />
              <p>{contact.phone}</p>
            </a>
            <div className={styles.card}>
              <MapPinIcon className={styles.cardIcon} />
              <p>{contact.address}</p>
            </div>
          </Reveal>
        </div>

        <Reveal from={rise} delay={0.4} className={styles.bottom}>
          <span className={styles.line} aria-hidden="true" />
          <p className={styles.credit}>
            Designed &amp; Developed by{' '}
            <Link href="/" className={styles.creditLink}>
              {site.name}
            </Link>
          </p>
          <ul className={styles.socials}>
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  className={styles.social}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Image src={social.icon} alt="" width={21} height={21} unoptimized />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </footer>
  );
}
