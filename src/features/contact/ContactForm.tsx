'use client';

import { useActionState, type ReactNode } from 'react';

import { Reveal } from '@/components/motion/Reveal';
import { PillButton } from '@/components/ui/PillButton';
import { contactPage } from '@/content/contact';

import { sendContactMessage, type ContactFormState } from './actions';
import styles from './ContactForm.module.css';

const initialState: ContactFormState = { status: 'idle' };

function Field({
  label,
  delay,
  children,
  className,
}: {
  label: string;
  delay: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal duration={0.7} delay={delay} className={styles.reveal}>
      <label className={styles.field}>
        <span className={styles.label}>{label}</span>
        <span className={className ? `${styles.control} ${className}` : styles.control}>
          {children}
        </span>
      </label>
    </Reveal>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const { form } = contactPage;

  const buttonLabel = pending
    ? null
    : state.status === 'success'
      ? form.success
      : state.status === 'error'
        ? form.error
        : form.submit;

  return (
    <form action={formAction} className={styles.form}>
      <Field label="Full Name" delay={0.3}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Enter your full name"
          autoComplete="name"
        />
      </Field>
      <Field label="Email" delay={0.4}>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Enter your Email"
          autoComplete="email"
          required
        />
      </Field>
      <Field label="Service" delay={0.5} className={styles.selectControl}>
        <select className={`${styles.input} ${styles.select}`} name="service" defaultValue="">
          <option value="" disabled>
            {form.servicePlaceholder}
          </option>
          {form.services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" delay={0.6}>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name="message"
          placeholder="Message"
        />
      </Field>

      {/* Honeypot field, hidden from people and assistive technology. */}
      <input
        className={styles.honeypot}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <Reveal delay={0.3}>
        <PillButton
          type="submit"
          disabled={pending}
          className={state.status === 'error' && !pending ? styles.error : undefined}
          aria-live="polite"
        >
          {buttonLabel ?? <span className={styles.spinner} aria-label="Sending" />}
        </PillButton>
      </Reveal>
    </form>
  );
}
