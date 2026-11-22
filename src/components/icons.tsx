import type { SVGProps } from 'react';

import styles from './icons.module.css';

type IconProps = SVGProps<SVGSVGElement>;

/** Arrow used inside pill buttons (stroke colour comes from `color`). */
export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13.75 6.75 19.25 12l-5.5 5.25M19 12H4.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Decorative flower mark placed before section labels. Rendered as a CSS mask of a
 * shared SVG so the markup stays small; it takes the current text colour.
 */
export function SparkleIcon({ className }: { className?: string }) {
  return (
    <span
      className={className ? `${styles.sparkle} ${className}` : styles.sparkle}
      aria-hidden="true"
    />
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 17 19" fill="currentColor" aria-hidden="true" {...props}>
      <path
        transform="translate(1.773 2.462)"
        d="M 6.105 0.452 C 6.301 -0.151 7.153 -0.151 7.349 0.452 L 8.488 3.96 C 8.576 4.229 8.827 4.411 9.11 4.411 L 12.798 4.411 C 13.432 4.411 13.695 5.222 13.183 5.594 L 10.199 7.762 C 9.97 7.928 9.874 8.224 9.961 8.493 L 11.101 12.001 C 11.297 12.603 10.607 13.104 10.095 12.732 L 7.111 10.564 C 6.882 10.397 6.572 10.397 6.342 10.564 L 3.359 12.732 C 2.846 13.104 2.157 12.603 2.352 12.001 L 3.492 8.493 C 3.58 8.224 3.484 7.928 3.255 7.762 L 0.271 5.594 C -0.242 5.222 0.022 4.411 0.655 4.411 L 4.343 4.411 C 4.627 4.411 4.878 4.229 4.965 3.96 Z"
      />
    </svg>
  );
}

/** "Eye" mark shown in the custom cursor when hovering portfolio cards. */
export function EyeIcon(props: IconProps) {
  const eye =
    'M 0 8.25 C 0 3.694 2.015 0 4.5 0 C 6.985 0 9 3.694 9 8.25 C 9 12.806 6.985 16.5 4.5 16.5 C 2.015 16.5 0 12.806 0 8.25 Z';
  const pupil =
    'M 0 2.25 C 0 1.007 1.007 0 2.25 0 C 3.493 0 4.5 1.007 4.5 2.25 C 4.5 3.493 3.493 4.5 2.25 4.5 C 1.007 4.5 0 3.493 0 2.25 Z';
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={pupil} transform="translate(3 9.75)" fill="currentColor" />
      <path d={pupil} transform="translate(12 9.75)" fill="currentColor" />
      <path d={eye} transform="translate(12 3.75)" />
      <path d={eye} transform="translate(3 3.75)" />
    </svg>
  );
}

const lineIconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

export function MailIcon(props: IconProps) {
  return (
    <svg {...lineIconProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...lineIconProps} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...lineIconProps} {...props}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
