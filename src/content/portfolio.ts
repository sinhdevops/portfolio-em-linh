/** An image in /public/images/projects with its intrinsic size (avoids layout shift in the dialog). */
export type ProjectImage = { file: string; width: number; height: number };

export type ProjectPreview = {
  /** Case-study images shown stacked inside the details dialog. */
  gallery?: ProjectImage[];
  /** Single full-size image shown when there is no gallery or video. */
  image?: ProjectImage;
  /** Embeddable video URL; loaded only while the dialog is open. */
  video?: string;
  /** Paragraphs shown instead of the card description. */
  details?: string[];
  /** "My role" bullet list. */
  roles?: string[];
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  /** File name inside /public/images/projects. */
  image: string;
  /** External project link. Omitted for projects that only open the details dialog. */
  url?: string;
  /** When set, the card opens a details dialog instead of navigating away. */
  preview?: ProjectPreview;
};

export type PortfolioCategory = {
  slug: string;
  number: string;
  title: string;
  /** Long description used on the home page / portfolio overview cards. */
  summary: string;
  /** Intro paragraph on the category page. */
  description: string;
  cover: { src: string; alt: string };
  projects: Project[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: 'web-design',
    number: '01',
    title: 'Web Design',
    summary:
      'Designing modern, user-centered websites that combine visually compelling interfaces with seamless functionality and intuitive user experiences. I focus on creating responsive, accessible, and thoughtfully crafted digital solutions that strengthen brand identity, enhance user engagement, and drive meaningful business growth.',
    description:
      'Designing visually compelling, user-centered websites that combine creativity, functionality, and seamless experiences. From responsive layouts to intuitive navigation, every detail is thoughtfully crafted to strengthen brand identity, enhance usability, and create meaningful digital experiences.',
    cover: {
      src: '/images/portfolio/web-design-cover.webp',
      alt: 'Website design preview for Công ty Luật Dương Gia',
    },
    projects: [
      {
        name: 'Sofin Network',
        description:
          'An immersive digital ecosystem website connecting creators, brands, partners, and technology through bold visuals and clear storytelling.',
        tags: ['Web Design', 'Digital Ecosystem', 'Visual Design'],
        image: 'sofin-network.webp',
        url: 'https://www.sofingroup.com/network/',
      },
      {
        name: 'Sofin Group',
        description:
          'A technology group website presenting AI solutions, a connected digital ecosystem, and opportunities for business collaboration.',
        tags: ['Web Design', 'Corporate', 'Technology'],
        image: 'sofin-group.webp',
        url: 'https://www.sofingroup.com/',
      },
      {
        name: 'Luật Dương Gia',
        description:
          'A legal services landing page presenting business registration packages, the legal team, and consultation options in a clear, approachable layout.',
        tags: ['Landing Page', 'Legal Services', 'UI/UX'],
        image: 'duong-gia.webp',
        url: 'https://luatduonggia.com/dang-ky-doanh-nghiep/',
      },
      {
        name: 'AFT Group',
        description:
          'A corporate website for a finance, assets, and technology ecosystem, using a refined navy and gold palette to communicate vision and partnership.',
        tags: ['Web Design', 'Corporate', 'Finance'],
        image: 'aft-group.webp',
        url: 'https://aft.sofingroup.com/',
      },
      {
        name: 'Viora Wine',
        description:
          'A wine retail website with rich product imagery, curated collections, and straightforward navigation for discovering wines and gifts.',
        tags: ['Web Design', 'E-commerce', 'Wine & Lifestyle'],
        image: 'viora-wine.webp',
        url: 'https://www.viorawine.com/',
      },
      {
        name: 'Landing Page Game',
        description:
          'A fantasy game landing page combining character artwork, a clear visual hierarchy, and prominent calls to action for an engaging player experience.',
        tags: ['Landing Page', 'Gaming', 'UI/UX'],
        image: 'game-landing.webp',
        url: 'https://www.behance.net/gallery/240101371/Landing-Page-Game-Website-Design-UIUX-Visual',
        preview: {
          gallery: [
            { file: 'game-landing-cover.webp', width: 1600, height: 1236 },
            { file: 'game-landing-full-page.webp', width: 1600, height: 5813 },
          ],
        },
      },
      {
        name: 'IT Service Company Website',
        description:
          'A corporate IT services website concept with a clean layout, clear service navigation, and prominent contact options for business enquiries.',
        tags: ['Web Design', 'IT Services', 'UI/UX'],
        image: 'it-service.webp',
        url: 'https://www.behance.net/gallery/172805173/IT-Service-Company-Website-UIUX-Design',
      },
    ],
  },
  {
    slug: 'app-design',
    number: '02',
    title: 'App Design',
    summary:
      'Designing intuitive and user-centered mobile applications that deliver seamless navigation, meaningful micro-interactions, and a clear visual hierarchy across multiple user touchpoints',
    description:
      'Designing intuitive mobile experiences that bring clarity to everyday moments. Explore apps for better sleep, food ordering, music discovery, and community learning — each shaped around clear navigation, thoughtful interfaces, and meaningful user needs.',
    cover: {
      src: '/images/portfolio/app-design-cover.webp',
      alt: 'Snooz AI sleep tracking mobile app design showcase',
    },
    projects: [
      {
        name: 'Sleep Tracker',
        description:
          'A sleep tracking app with bedtime reminders, smart alarms, sleep sounds, and clear sleep reports, bringing everyday sleep habits into a calm, easy-to-use experience.',
        tags: ['App Design', 'Sleep & Wellness', 'UI/UX'],
        image: 'sleep-tracker.webp',
        url: 'https://www.behance.net/gallery/242742765/Sleep-Tracker-Recording-Analyzing-Snoring',
        preview: {
          gallery: [
            { file: 'snooz-cover.webp', width: 1600, height: 1217 },
            { file: 'snooz-about.webp', width: 1600, height: 1675 },
            { file: 'snooz-logo.webp', width: 1600, height: 1179 },
            { file: 'snooz-onboarding.webp', width: 1600, height: 1222 },
            { file: 'snooz-main-screens.webp', width: 1600, height: 3027 },
            { file: 'snooz-thank-you.webp', width: 1600, height: 397 },
          ],
        },
      },
      {
        name: 'Pizza Ordering App',
        description:
          'A food ordering app concept with a playful visual identity and a clear ordering journey, helping people explore the menu and choose their favourite pizza.',
        tags: ['App Design', 'Food Delivery', 'UI/UX'],
        image: 'pizza-app.webp',
        url: 'https://www.behance.net/gallery/231547185/UI-App-Design-Pizza-Ordering-App',
        preview: {
          gallery: [
            { file: 'pizza-cover.webp', width: 1600, height: 1138 },
            { file: 'pizza-about.webp', width: 1600, height: 1398 },
            { file: 'pizza-login.webp', width: 1600, height: 1358 },
            { file: 'pizza-home.webp', width: 1600, height: 1227 },
            { file: 'pizza-product.webp', width: 1600, height: 1111 },
            { file: 'pizza-order.webp', width: 1600, height: 1503 },
            { file: 'pizza-account.webp', width: 1600, height: 1111 },
            { file: 'pizza-thank-you.webp', width: 1600, height: 333 },
          ],
        },
      },
      {
        name: 'Music App',
        description:
          'A music app concept with a charcoal blue and orange palette, bringing discovery, playlists, a personal library, and playback controls into one cohesive listening experience.',
        tags: ['App Design', 'Music', 'UI/UX'],
        image: 'music-app.webp',
        url: 'https://www.behance.net/gallery/173941373/Music-App-UXUI-Designer',
        preview: { gallery: [{ file: 'music-app-overview.webp', width: 1800, height: 1230 }] },
      },
      {
        name: 'Courses for the community',
        description:
          'A community learning app concept for discovering courses, exploring topics, and connecting with people who share an interest in learning and personal growth.',
        tags: ['App Design', 'E-learning', 'Community'],
        image: 'sofinhub.webp',
        url: 'https://www.figma.com/design/m1Ugq1du8Kf5JYB7Cpr0j6/Sofin-HUB?node-id=0-1&t=JCJ6RbD6H4POtEN8-1',
      },
    ],
  },
  {
    slug: 'design-system',
    number: '03',
    title: 'Design System',
    summary:
      'Designed and maintained a scalable design system to ensure consistency, usability, and efficiency across digital products. By creating reusable UI components, typography guidelines, color palettes, and interaction patterns, I streamlined design workflows, improved team collaboration, and delivered seamless, intuitive user experiences.',
    description:
      'Building cohesive digital experiences through reusable components, clear visual foundations, and thoughtful interaction patterns. Explore a design system that brings consistency to complex dashboards and helps teams design with confidence.',
    cover: {
      src: '/images/portfolio/design-system-cover.webp',
      alt: 'MyLink analytics dashboard design system preview',
    },
    projects: [
      {
        name: 'Analytic Dashboard – Design System',
        description:
          'A cohesive dashboard design system with reusable interface components, structured layouts, and a consistent visual language across analytics, messaging, and account flows.',
        tags: ['Design System', 'Dashboard', 'Figma'],
        image: 'analytic-dashboard.webp',
        url: 'https://www.behance.net/gallery/226186085/Design-System-UIUX',
      },
      {
        name: 'Antidetect – Browser Profile Manager',
        description:
          'A dashboard for managing many browser profiles in one place: profiles, groups, proxies and extensions, with clear status counts, quick actions and team features built on a consistent design system.',
        tags: ['Design System', 'Dashboard', 'Tool'],
        image: 'antidetect.webp',
        preview: { image: { file: 'antidetect.webp', width: 1000, height: 667 } },
      },
    ],
  },
  {
    slug: 'ai-film-creation-tools',
    number: '04',
    title: 'AI Film Creation Tools',
    summary:
      'Designed intuitive and user-friendly interfaces for AI-powered filmmaking tools, focusing on simplifying complex creative workflows. From script development and video generation to content management, I created seamless experiences that help users produce engaging visual stories efficiently while maintaining consistency, usability, and creative flexibility.',
    description:
      'Designing intuitive tools that make complex creative workflows easier to navigate. From project organisation to characters, scenes, and visual storytelling, every interface supports a clearer, more focused filmmaking experience.',
    cover: {
      src: '/images/portfolio/ai-film-cover.webp',
      alt: 'AI film creation dashboard preview',
    },
    projects: [
      {
        name: 'Microdrama AI Studio',
        description:
          'An AI filmmaking workspace bringing projects, characters, and scenes together in a clear dashboard, helping creators organise their stories and move through production with confidence.',
        tags: ['Product Design', 'AI Filmmaking', 'UI/UX'],
        image: 'microdrama-ai-studio.webp',
        preview: { image: { file: 'microdrama-ai-studio.webp', width: 1000, height: 1000 } },
      },
      {
        name: 'Tool MV BeatFrame',
        description:
          'An automatic music video creation tool that turns a song into a beat-synced MV: scenes, lyrics, subtitles and visuals laid out on one timeline, ready to export.',
        tags: ['Personal Project', 'AI Video', 'UI/UX', 'Development'],
        image: 'beatframe.webp',
        preview: {
          video: 'https://drive.google.com/file/d/12rwoaDGAubW63P2mCilF2zivWqHX-yzY/preview',
          details: [
            'BeatFrame is a tool that automatically creates music videos. Drop in a song and it analyses the beat, splits the track into scenes (intro, verse, chorus), generates a clip for each scene and places lyrics, subtitles and visuals on a timeline synced to the rhythm.',
            'From there the MV can be fine-tuned in an editor: a scene library, storyboard and post-production panels, style and text controls, and export in both 16:9 and 9:16 formats.',
          ],
          roles: [
            'Came up with the idea and wrote the concept and script',
            'Designed the full UI/UX, from user flow to final interface',
            'Built the project end to end in code',
            'Tested and produced the demo myself',
          ],
        },
      },
    ],
  },
];

export function getPortfolioCategory(slug: string): PortfolioCategory | undefined {
  return portfolioCategories.find((category) => category.slug === slug);
}

/** Old Framer CMS slugs, kept as permanent redirects so shared links still work. */
export const legacyPortfolioRedirects = [
  { from: 'lumora-beauty-rebrand', to: 'web-design' },
  { from: 'aether-mobile-experience', to: 'app-design' },
  { from: 'virex-marketing-website', to: 'design-system' },
  { from: 'nova-saas-platform', to: 'ai-film-creation-tools' },
] as const;
