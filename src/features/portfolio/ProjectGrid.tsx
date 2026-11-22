'use client';

import { useCallback, useState } from 'react';

import type { Project } from '@/content/portfolio';

import { ProjectCard } from './ProjectCard';
import { ProjectDialog } from './ProjectDialog';
import styles from './ProjectGrid.module.css';

/** Two-column grid of project cards; preview-only projects open in a details dialog. */
export function ProjectGrid({ projects, label }: { projects: Project[]; label: string }) {
  const [active, setActive] = useState<Project | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <section className={styles.grid} aria-label={label}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} onPreview={setActive} />
        ))}
      </section>
      <ProjectDialog project={active} onClose={close} />
    </>
  );
}
