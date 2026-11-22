'use server';

import { contact } from '@/content/site';

export type ContactFormState = { status: 'idle' | 'success' | 'error' };

const MAX_LENGTH = { name: 120, email: 254, service: 80, message: 5000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

function read(formData: FormData, key: keyof typeof MAX_LENGTH): string {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim().slice(0, MAX_LENGTH[key]) : '';
}

/**
 * Sends the contact form to the site owner through the Resend API.
 * Requires RESEND_API_KEY; CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL are optional.
 */
export async function sendContactMessage(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real visitors never fill this hidden field.
  if (formData.get('website')) return { status: 'success' };

  const name = read(formData, 'name');
  const email = read(formData, 'email');
  const service = read(formData, 'service');
  const message = read(formData, 'message');
  if (!EMAIL_PATTERN.test(email)) return { status: 'error' };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not configured.');
    return { status: 'error' };
  }

  const rows = [
    ['Name', name || '—'],
    ['Email', email],
    ['Service', service || '—'],
    ['Message', message || '—'],
  ];

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? 'MyLink Portfolio <onboarding@resend.dev>',
        to: [process.env.CONTACT_TO_EMAIL ?? contact.email],
        reply_to: email,
        subject: `New message from ${name || email}`,
        text: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
        html: rows
          .map(
            ([label, value]) =>
              `<p><strong>${label}:</strong><br>${escapeHtml(value!).replace(/\n/g, '<br>')}</p>`,
          )
          .join(''),
      }),
    });
    if (!response.ok) {
      console.error('Contact form: Resend responded with', response.status, await response.text());
      return { status: 'error' };
    }
    return { status: 'success' };
  } catch (error) {
    console.error('Contact form: request failed', error);
    return { status: 'error' };
  }
}
