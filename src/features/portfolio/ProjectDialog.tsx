'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import type { Project } from '@/content/portfolio';
import { getLenis } from '@/lib/lenis';

import styles from './ProjectDialog.module.css';

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

/** Modal with the full case study (gallery, video or details) of a preview-only project. */
export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !project) return;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.documentElement.style.overflow = 'hidden';
    getLenis()?.stop();
    return () => {
      if (dialog.open) dialog.close();
      document.documentElement.style.overflow = '';
      getLenis()?.start();
    };
  }, [project]);

  // Closing always goes through React state; the effect cleanup closes the element.
  const requestClose = () => onClose();

  const preview = project?.preview;

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-label={project ? `${project.name} details` : undefined}
      data-lenis-prevent
      onCancel={(event) => {
        // Escape key.
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        // Clicking the backdrop closes the dialog.
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      {project && (
        <>
          <button
            type="button"
            className={styles.close}
            aria-label="Close project details"
            onClick={requestClose}
          >
            Close ✕
          </button>
          <h2 className={styles.title}>{project.name}</h2>

          {preview?.gallery ? (
            <div className={styles.gallery}>
              {preview.gallery.map((image, index) => (
                <Image
                  key={image.file}
                  src={`/images/projects/${image.file}`}
                  alt={`${project.name} case study ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 1043px) 92vw, 912px"
                  className={styles.galleryImage}
                />
              ))}
            </div>
          ) : preview?.video ? (
            <div className={styles.video}>
              <iframe
                src={preview.video}
                title={`${project.name} demo video`}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          ) : preview?.image ? (
            <Image
              src={`/images/projects/${preview.image.file}`}
              alt={`${project.name} full project preview`}
              width={preview.image.width}
              height={preview.image.height}
              sizes="(max-width: 1043px) 92vw, 912px"
              className={styles.image}
            />
          ) : null}

          {preview?.details ? (
            <>
              {preview.details.map((text) => (
                <p key={text} className={styles.text}>
                  {text}
                </p>
              ))}
              {preview.roles && (
                <>
                  <h3 className={styles.subtitle}>My role</h3>
                  <ul className={styles.roles}>
                    {preview.roles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <p className={styles.text}>{project.description}</p>
          )}
        </>
      )}
    </dialog>
  );
}
