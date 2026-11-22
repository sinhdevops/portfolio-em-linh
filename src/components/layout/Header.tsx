import Image from 'next/image';
import Link from 'next/link';

import { PillLink } from '@/components/ui/PillButton';
import { navigation } from '@/content/site';

import styles from './Header.module.css';
import { MobileMenu } from './MobileMenu';

const mobileNavigation = [...navigation, { label: 'Contact', href: '/contact-us' }];

export function Header() {
  return (
    <header className={styles.header}>
      {/* Desktop (>= 1200px) */}
      <nav className={styles.desktop} aria-label="Main">
        <Link href="/" className={styles.logo} aria-label="MyLink home">
          <Image
            src="/images/brand/mylink-logo.webp"
            alt="MyLink"
            width={150}
            height={52}
            priority
          />
        </Link>
        <ul className={styles.links}>
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <PillLink href="/contact-us">Get In Touch</PillLink>
      </nav>

      {/* Tablet & phone */}
      <MobileMenu items={mobileNavigation} />
    </header>
  );
}
