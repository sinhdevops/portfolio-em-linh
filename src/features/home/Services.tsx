import Image from 'next/image';
import type { CSSProperties } from 'react';

import { FloatLoop } from '@/components/motion/FloatLoop';
import { Marquee } from '@/components/motion/Marquee';
import { Reveal } from '@/components/motion/Reveal';
import { Chip } from '@/components/ui/Chip';
import { PillLink } from '@/components/ui/PillButton';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { services } from '@/content/home';
import type { RevealFrom } from '@/lib/motion';

import styles from './Services.module.css';

const GRADIENT_BG = '/images/home/services-gradient.webp';

type FloatingChip = {
  label: string;
  className: string;
  enter: RevealFrom;
  loop: RevealFrom;
  duration: number;
  rotate?: number;
};

/** Chips drifting inside the Brand Identity card. */
const brandChips: FloatingChip[] = [
  {
    label: 'Brand Strategy',
    className: styles.chipStrategy!,
    enter: { opacity: 0, x: 50, y: -38 },
    loop: { x: 57, y: -20 },
    duration: 4,
    rotate: 30,
  },
  {
    label: 'Visual Identity',
    className: styles.chipVisual!,
    enter: { opacity: 0, x: -50, y: -41 },
    loop: { x: -10, y: -40 },
    duration: 5,
    rotate: -13,
  },
  {
    label: 'Brand Guidelines',
    className: styles.chipGuidelines!,
    enter: { opacity: 0, y: 67 },
    loop: { y: -40 },
    duration: 3.6,
  },
];

const leftColumn: FloatingChip[] = [
  {
    label: 'Color Palette',
    className: '',
    enter: { opacity: 0, x: -50 },
    loop: { x: 80, y: 25 },
    duration: 4,
    rotate: 12,
  },
  {
    label: 'Typography',
    className: '',
    enter: { opacity: 0, x: -50 },
    loop: { x: 10, y: -50 },
    duration: 5,
  },
];

const rightColumn: FloatingChip[] = [
  { label: 'Clarity', className: '', enter: { opacity: 0, x: 50 }, loop: { x: -90 }, duration: 4 },
  {
    label: 'Voice',
    className: '',
    enter: { opacity: 0, x: 50 },
    loop: { x: -10, y: -50 },
    duration: 5,
  },
];

function DriftingChip({ chip }: { chip: FloatingChip }) {
  return (
    <FloatLoop
      className={chip.className}
      enter={chip.enter}
      loop={chip.loop}
      duration={chip.duration}
    >
      <Chip style={chip.rotate ? ({ rotate: `${chip.rotate}deg` } as CSSProperties) : undefined}>
        {chip.label}
      </Chip>
    </FloatLoop>
  );
}

function CardHeading({
  title,
  text,
  onDark,
  textWidth,
}: {
  title: string;
  text: string;
  onDark?: boolean;
  textWidth: number;
}) {
  return (
    <div className={styles.heading}>
      <h3 className={onDark ? `${styles.cardTitle} ${styles.onDark}` : styles.cardTitle}>
        {title}
      </h3>
      <p
        className={onDark ? `${styles.cardText} ${styles.onDark}` : styles.cardText}
        style={{ maxWidth: textWidth }}
      >
        {text}
      </p>
    </div>
  );
}

export function Services() {
  const { brand, web, uiux, development, impact } = services;

  return (
    <Section id="service">
      <SectionTitle tag={services.tag} title={services.title} maxWidth={466} tone="onDark" />

      <div className={styles.board}>
        <div className={styles.columns}>
          <div className={styles.column}>
            {/* Brand Identity */}
            <article className={`${styles.card} ${styles.gradientCard} ${styles.brandCard}`}>
              <Image
                className={styles.cardBackground}
                src={GRADIENT_BG}
                alt=""
                fill
                sizes="360px"
              />
              <div className={styles.brandContent}>
                <Reveal>
                  <CardHeading title={brand.title} text={brand.text} onDark textWidth={229} />
                </Reveal>
                <div className={styles.chipField} aria-hidden="true">
                  {brandChips.map((chip) => (
                    <DriftingChip key={chip.label} chip={chip} />
                  ))}
                  <div className={styles.chipColumn}>
                    {leftColumn.map((chip) => (
                      <DriftingChip key={chip.label} chip={chip} />
                    ))}
                  </div>
                  <div className={styles.chipColumn}>
                    {rightColumn.map((chip) => (
                      <DriftingChip key={chip.label} chip={chip} />
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Web Experience */}
            <article className={`${styles.card} ${styles.gradientCard} ${styles.webCard}`}>
              <Image
                className={styles.cardBackground}
                src={GRADIENT_BG}
                alt=""
                fill
                sizes="360px"
              />
              <Reveal duration={0.7} delay={0.1} className={styles.webHeading}>
                <CardHeading title={web.title} text={web.text} onDark textWidth={229} />
              </Reveal>
              <Marquee duration={10.08} gap={12} className={styles.webMarquee}>
                {web.images.map((src) => (
                  <Image
                    key={src}
                    className={styles.webShot}
                    src={src}
                    alt=""
                    width={156}
                    height={105}
                    sizes="156px"
                  />
                ))}
              </Marquee>
            </article>
          </div>

          <div className={styles.column}>
            {/* UI/UX Design */}
            <article className={`${styles.card} ${styles.uiuxCard}`}>
              <Reveal delay={0.1}>
                <CardHeading title={uiux.title} text={uiux.text} textWidth={220} />
              </Reveal>
              <Reveal preset="scaleIn" delay={0.3} className={styles.uiuxImage}>
                <Image
                  src={uiux.image}
                  alt="Mobile app UI mockup"
                  fill
                  sizes="(max-width: 767px) 80vw, 303px"
                />
              </Reveal>
            </article>

            {/* Development */}
            <article className={`${styles.card} ${styles.devCard}`}>
              <Reveal duration={0.7} delay={0.2}>
                <CardHeading title={development.title} text={development.text} textWidth={230} />
              </Reveal>
              <FloatLoop className={styles.devTools} loop={{ rotate: 7 }} duration={3.6}>
                <Image
                  src={development.image}
                  alt="Design and development tool icons"
                  fill
                  sizes="400px"
                />
              </FloatLoop>
            </article>
          </div>
        </div>

        {/* Let's Create Impact */}
        <article className={`${styles.card} ${styles.impactCard}`}>
          <div className={styles.impactVisual}>
            <Reveal preset="scaleIn" delay={0.1} className={styles.impactGradient}>
              <Image src="/images/home/impact-gradient.webp" alt="" fill sizes="540px" />
            </Reveal>
            <div className={styles.impactImage}>
              <span className={`${styles.shadow} ${styles.shadowLeft}`} aria-hidden="true" />
              <Image
                src="/images/home/impact-hands.webp"
                alt="Two hands reaching toward each other"
                fill
                sizes="302px"
              />
              <span className={`${styles.shadow} ${styles.shadowRight}`} aria-hidden="true" />
            </div>
          </div>
          <Reveal duration={0.7} delay={0.3} className={styles.impactText}>
            <span className={styles.impactLine} aria-hidden="true" />
            <Chip>{impact.tag}</Chip>
            <div className={styles.impactCopy}>
              <h3 className={styles.cardTitle}>{impact.title}</h3>
              <p className={styles.cardText} style={{ maxWidth: 229 }}>
                {impact.text}
              </p>
            </div>
            <PillLink href="/contact-us">{impact.cta}</PillLink>
          </Reveal>
        </article>
      </div>
    </Section>
  );
}
