import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { MotionProvider } from '@/components/motion/MotionProvider';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { site } from '@/content/site';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  icons: { icon: '/images/brand/mylink-logo.webp' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e9ecf3',
};

const preloadFonts = [
  'inter-display-400-latin',
  'inter-display-500-latin',
  'inter-display-600-latin',
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={site.locale}>
      <head>
        {preloadFonts.map((font) => (
          <link
            key={font}
            rel="preload"
            href={`/fonts/${font}.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
      </head>
      <body>
        <MotionProvider>
          <SmoothScroll />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
