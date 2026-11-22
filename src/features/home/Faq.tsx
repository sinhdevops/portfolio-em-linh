import Image from 'next/image';

import { Reveal } from '@/components/motion/Reveal';
import { PillLink } from '@/components/ui/PillButton';
import { Section } from '@/components/ui/Section';
import { SectionTag } from '@/components/ui/SectionTag';
import { faq } from '@/content/home';

import { Accordion } from './Accordion';
import styles from './Faq.module.css';

export function Faq() {
  return (
    <Section contentClassName={styles.content}>
      <div className={styles.intro}>
        <Image
          className={styles.gradient}
          src="/images/home/faq-gradient.webp"
          alt=""
          width={779}
          height={511}
          sizes="779px"
        />
        <div className={styles.introText}>
          <div className={styles.titleGroup}>
            <Reveal>
              <SectionTag tone="onDark">{faq.tag}</SectionTag>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={styles.title}>{faq.title}</h2>
            </Reveal>
          </div>
          <Reveal preset="fadeUp24" delay={0.2}>
            <PillLink href="/contact-us">Get In Touch</PillLink>
          </Reveal>
        </div>
      </div>

      <Reveal preset="fadeUp50" delay={0.2} className={styles.list}>
        <Accordion items={faq.items} />
      </Reveal>
    </Section>
  );
}
