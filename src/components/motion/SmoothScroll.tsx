'use client';

import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { getLenis, setLenis } from '@/lib/lenis';

/** Smooth wheel scrolling (Lenis, duration 1.4s) and smooth in-page anchor links. */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.4, anchors: true });
    setLenis(lenis);
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // New page: start at the top unless the URL targets an anchor.
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;
    const hash = window.location.hash;
    const target = hash ? document.querySelector<HTMLElement>(hash) : null;
    lenis.scrollTo(target ?? 0, { immediate: true });
  }, [pathname]);

  return null;
}
