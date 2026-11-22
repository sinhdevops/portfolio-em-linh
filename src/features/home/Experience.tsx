import { SparkleIcon } from '@/components/icons';
import { Reveal } from '@/components/motion/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { experience } from '@/content/home';
import { cn } from '@/lib/cn';

import styles from './Experience.module.css';

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={styles.features}>
      <p className={styles.featuresTitle}>{title}</p>
      <ul className={styles.featureList}>
        {items.map((item) => (
          <li key={item} className={styles.feature}>
            <span className={styles.dot} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  const { summary, role } = experience;

  return (
    <Section id="pricing">
      <SectionTitle tag={experience.tag} title={experience.title} maxWidth={438} tone="onDark" />

      <div className={styles.cards}>
        <Reveal preset="popIn" duration={0.7} delay={0.1} className={cn(styles.card, styles.dark)}>
          <div className={styles.header}>
            <div className={styles.labelRow}>
              <p className={styles.label}>{summary.label}</p>
              <SparkleIcon className={styles.mark} />
            </div>
            <h3 className={styles.amount}>{summary.amount}</h3>
            <p className={styles.text}>{summary.text}</p>
          </div>
          <FeatureList title={summary.listTitle} items={summary.items} />
        </Reveal>

        <Reveal preset="popIn" duration={0.7} delay={0.2} className={cn(styles.card, styles.light)}>
          <div className={styles.header}>
            <div className={styles.labelRow}>
              <p className={styles.label}>{role.label}</p>
              <SparkleIcon className={styles.mark} />
            </div>
            <div className={styles.roleRow}>
              <h3 className={styles.amount}>{role.title}</h3>
              <p className={styles.period}>{role.period}</p>
            </div>
            <p className={styles.text}>{role.text}</p>
          </div>
          <FeatureList title={role.listTitle} items={role.items} />
        </Reveal>
      </div>
    </Section>
  );
}
