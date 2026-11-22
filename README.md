# MyLink — Portfolio UI/UX Design

Portfolio of Tran Thi My Linh, built with **Next.js 16 (App Router)**, React 19 and TypeScript.
Every page is statically generated; animations use [Motion](https://motion.dev) and smooth
scrolling uses [Lenis](https://lenis.darkroom.engineering).

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run format     # Prettier
```

Copy `.env.example` to `.env.local` and fill in the values you need (see below).

## Project structure

```
public/
  fonts/              Self-hosted Inter / Inter Display (woff2 subsets)
  images/             Optimised WebP images, grouped by page/feature
src/
  app/
    (site)/           Pages that share the header and footer
      page.tsx        Home
      my-portfolio/   Portfolio overview + one page per category
      blogs/          Blog list + articles
      contact-us/     Contact page
    experience/       Standalone résumé page (own header and footer)
    not-found.tsx     404 page
    sitemap.ts, robots.ts
  components/
    layout/           Header, mobile menu, footer, shared page shell
    motion/           Reveal, AppearOnLoad, Marquee, FloatLoop, smooth scroll, cursor…
    ui/               Pill buttons, chips, section titles, page sections
  content/            All copy and data (edit these to update the site)
  features/           Page-specific components (home, portfolio, blog, contact)
  lib/                Small helpers (motion presets, Lenis instance, class names)
  styles/             Design tokens and font faces
```

## Editing content

All text, links and project data live in `src/content/`:

| File            | What it contains                                        |
| --------------- | ------------------------------------------------------- |
| `site.ts`       | Site name, contact details, social links, navigation    |
| `home.ts`       | Home page sections (hero, about, services, FAQ, …)      |
| `portfolio.ts`  | Portfolio categories and their projects                 |
| `blog.ts`       | Blog posts                                              |
| `contact.ts`    | Contact page copy and the "Service" options of the form |
| `experience.ts` | Jobs listed on `/experience`                            |

Images referenced there live in `public/images/`. Use WebP; `next/image` serves resized
AVIF/WebP versions automatically.

## Environment variables

| Variable               | Purpose                                                           |
| ---------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public origin for canonical URLs and the sitemap (auto on Vercel) |
| `RESEND_API_KEY`       | [Resend](https://resend.com) key used by the contact form         |
| `CONTACT_TO_EMAIL`     | Inbox for contact messages (defaults to the email in `site.ts`)   |
| `CONTACT_FROM_EMAIL`   | Verified sender address, e.g. `MyLink <hello@your-domain.com>`    |

Without `RESEND_API_KEY` the contact form shows "Something went wrong".

## Deployment

Deploy to Vercel as a standard Next.js project (no extra configuration needed). Old
portfolio URLs (`/my-portfolio/lumora-beauty-rebrand`, …) permanently redirect to the new
category pages (see `next.config.ts`).
