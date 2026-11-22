import Image from 'next/image';

import { StarIcon } from '@/components/icons';
import { Reveal } from '@/components/motion/Reveal';
import { Chip } from '@/components/ui/Chip';
import { PillLink } from '@/components/ui/PillButton';
import { SectionTag } from '@/components/ui/SectionTag';
import { about } from '@/content/home';

import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <Reveal>
            <SectionTag>{about.tag}</SectionTag>
          </Reveal>
          <div className={styles.titleAndButton}>
            <Reveal delay={0.2}>
              <h2 id="about-title" className={styles.title}>
                {about.title}
              </h2>
            </Reveal>
            <Reveal duration={0.7} delay={0.3}>
              <PillLink href="/contact-us">Get In Touch</PillLink>
            </Reveal>
          </div>
        </div>

        <div className={styles.bottom}>
          <Reveal preset="scaleIn" className={styles.portraitFrame}>
            <div className={styles.portrait}>
              <Image
                src={about.portrait.src}
                alt={about.portrait.alt}
                fill
                sizes="(max-width: 767px) 100vw, 404px"
              />
            </div>
          </Reveal>

          <div className={styles.cards}>
            <Reveal
              preset="fadeUp40"
              delay={0.3}
              className={`${styles.card} ${styles.satisfaction}`}
            >
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{about.satisfaction.value}</h3>
                <p className={styles.cardLabel}>{about.satisfaction.label}</p>
              </div>
              <p className={styles.rating}>
                <StarIcon className={styles.star} />
                <span>{about.satisfaction.rating}</span>
              </p>
              <Image
                className={styles.avatars}
                src={about.avatars.src}
                alt={about.avatars.alt}
                width={139}
                height={133}
                sizes="139px"
              />
            </Reveal>

            <Reveal preset="fadeUp40" delay={0.4} className={`${styles.card} ${styles.strengths}`}>
              <h3 className={`${styles.cardTitle} ${styles.strengthsTitle}`}>
                {about.strengths.title}
              </h3>
              <div className={styles.chips}>
                {about.strengths.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
                <Chip className={styles.tiltedChip}>{about.strengths.tiltedTag}</Chip>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
