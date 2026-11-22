import { PillLink } from './PillButton';

/** "Go Back" pill used at the bottom of detail pages. */
export function BackLink({ href, label = 'Go Back' }: { href: string; label?: string }) {
  return (
    <PillLink href={href} back>
      {label}
    </PillLink>
  );
}
