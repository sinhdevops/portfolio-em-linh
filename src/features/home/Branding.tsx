import Image from 'next/image';

import { Marquee } from '@/components/motion/Marquee';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { branding } from '@/content/home';

import styles from './Branding.module.css';

/** "Visual identity & Branding" — endless gallery of the LIFT brand identity work. */
export function Branding() {
  return (
    <Section className={styles.section}>
      <SectionTitle tag={branding.tag} title={branding.title} maxWidth={347} />
      <Marquee
        duration={36}
        gap={20}
        pauseOnHover
        className={styles.marquee}
        ariaLabel="LIFT brand design gallery"
      >
        {branding.gallery.map((item) => (
          <figure key={item.src} className={styles.item}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 767px) 250px, 320px" />
          </figure>
        ))}
      </Marquee>
    </Section>
  );
}
