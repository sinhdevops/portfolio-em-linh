'use client';

import { AnimatePresence, m } from 'motion/react';
import { useId, useState } from 'react';

import { tween } from '@/lib/motion';

import styles from './Accordion.module.css';

type AccordionItem = { question: string; answer: string };

/** Single-open FAQ list; the first answer starts open. */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question} className={styles.item} data-open={open}>
            <h3 className={styles.heading}>
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className={styles.question}>{item.question}</span>
                <span className={styles.icon} aria-hidden="true">
                  <span className={styles.lineHorizontal} />
                  <span className={styles.lineVertical} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <m.div
                  id={panelId}
                  role="region"
                  className={styles.panel}
                  initial={{ height: 0, marginTop: 0 }}
                  animate={{ height: 'auto', marginTop: -12 }}
                  exit={{ height: 0, marginTop: 0 }}
                  transition={tween(0.3)}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
