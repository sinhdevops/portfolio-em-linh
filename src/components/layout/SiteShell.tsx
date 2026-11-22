import type { ReactNode } from 'react';

import { EyeCursor } from '@/components/motion/EyeCursor';

import { Footer } from './Footer';
import { Header } from './Header';

/** Shared chrome for the main site pages: header, page content and footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <EyeCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
