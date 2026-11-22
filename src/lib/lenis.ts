import type Lenis from 'lenis';

/** The page's Lenis instance, so overlays (dialogs, menus) can pause smooth scrolling. */
let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis(): Lenis | null {
  return instance;
}
