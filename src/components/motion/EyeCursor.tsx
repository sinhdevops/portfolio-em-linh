'use client';

import { useEffect, useRef, useState } from 'react';

import { EyeIcon } from '@/components/icons';

import styles from './EyeCursor.module.css';

/**
 * Replaces the pointer with a small frosted "eye" bubble while hovering any
 * element marked with `data-cursor="view"` (portfolio and blog cards).
 */
export function EyeCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const node = ref.current;
    if (!node) return;

    const onMove = (event: PointerEvent) => {
      const target =
        event.target instanceof Element ? event.target.closest('[data-cursor="view"]') : null;
      node.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      node.dataset.visible = target ? 'true' : 'false';
    };
    const onLeave = () => {
      node.dataset.visible = 'false';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={ref} className={styles.cursor} data-visible="false" aria-hidden="true">
      <EyeIcon className={styles.icon} />
    </div>
  );
}
