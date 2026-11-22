'use client';

import { AnimatePresence, m } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useId, useState } from 'react';

import type { NavItem } from '@/content/site';
import { tween } from '@/lib/motion';

import styles from './Header.module.css';

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const close = () => setOpen(false);

  return (
    <nav className={styles.mobile} aria-label="Main">
      <div className={styles.mobileBar}>
        <Link href="/" className={styles.logo} aria-label="MyLink home" onClick={close}>
          <Image
            src="/images/brand/mylink-logo.webp"
            alt="MyLink"
            width={150}
            height={52}
            priority
          />
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <m.ul
            id={menuId}
            className={styles.mobileLinks}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={tween(0.4)}
          >
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link} onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
