import Image from 'next/image';
import type { MouseEvent } from 'react';

import type { Project } from '@/content/portfolio';

import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  project: Project;
  onPreview: (project: Project) => void;
};

export function ProjectCard({ project, onPreview }: ProjectCardProps) {
  const href = project.url ?? `/images/projects/${project.image}`;
  const opensDialog = Boolean(project.preview);
  const suffix = opensDialog ? ' (opens project preview)' : ' (opens in a new tab)';

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!opensDialog) return;
    event.preventDefault();
    onPreview(project);
  };

  const linkProps = {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
    onClick: handleClick,
  } as const;

  return (
    <article className={styles.card}>
      <a className={styles.preview} {...linkProps} aria-label={`Open ${project.name}${suffix}`}>
        <Image
          src={`/images/projects/${project.image}`}
          alt={`${project.name} project mockup`}
          fill
          sizes="(max-width: 600px) 100vw, 430px"
        />
      </a>
      <div className={styles.content}>
        <h2 className={styles.title}>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.bottom}>
          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
          <a
            className={styles.link}
            {...linkProps}
            aria-label={`See details: ${project.name}${suffix}`}
          >
            See details <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
