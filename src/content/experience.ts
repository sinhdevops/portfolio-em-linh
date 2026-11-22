export type Job = {
  period: string;
  role: string;
  company: string;
  summary?: string;
  highlights: string[];
  projects?: string[];
};

export const experiencePage = {
  eyebrow: 'Experience',
  title: 'Work Experience',
  lead: 'UX/UI design across websites, apps and data platforms — from concept to delivery, working closely with product, development and AI teams.',
  footer: '© MyLink — Tran Thi My Linh, UX/UI Designer',
};

export const jobs: Job[] = [
  {
    period: '05/2026 – Now',
    role: 'UX/UI Designer · Tester',
    company: 'Sofin AI Joint Stock Company',
    summary:
      'Designed product ideas and UX/UI, and tested AI features and manual flows for multiple projects in the Sofin ecosystem.',
    highlights: [
      'Ideated and proposed product concepts, designed end-to-end UX/UI for web and app.',
      'Tested and validated AI features, evaluated output quality and accuracy.',
      'Performed manual testing (functional, UI/UX, cross-browser, cross-device) and managed bug reports.',
      'Collaborated with Product, Dev and AI teams to finalize features and ensure product quality.',
    ],
    projects: [
      'Sofin Group',
      'SofinNetwork',
      'Aft Group',
      'Duong Gia Law Firm',
      'Microdrama AI Studio',
      'Antidetect tool',
      'Sofin Hub',
      'ClaudeShare',
      'Sofilm',
      'YouTube Creator Studio tool',
    ],
  },
  {
    period: '10/2025 – 04/2026',
    role: 'UX/UI Designer',
    company: 'Freelance UI/UX Design',
    highlights: [
      'Designed website interfaces for business projects, ensuring visual consistency, brand alignment and business goals.',
      'Created visual assets such as banners, UI visuals and marketing graphics for websites and digital campaigns.',
      'Collaborated with cross-functional teams to refine designs based on requirements and feedback.',
      'Delivered design outputs on time while maintaining high quality standards.',
    ],
  },
  {
    period: '11/2023 – 09/2025',
    role: 'UX/UI Designer',
    company: 'LIFT Software Vietnam Company Limited',
    highlights: [
      'Led the UI/UX design of a data management and reporting platform for Nagata Group (Adcom), from concept to final delivery.',
      'Designed dashboards, charts and alert systems for LeadPlusOne, an ads marketing data management system.',
      'Redesigned Growme Analytics, a website performance and SEO analytics platform built on Google Analytics and Search Console.',
      'Built the LIFT Company brand identity: uniforms, ID cards, name cards, brochures and banners.',
      'Supported internal projects including MPF-Mobile, Workify and the LIFT company website.',
    ],
    projects: [
      'LeadPlusOne',
      'Adcom (Nagata Group)',
      'Growme Analytics',
      'LIFT Brand Identity',
      'MPF-Mobile',
      'Workify',
    ],
  },
  {
    period: '03/2023 – 07/2023',
    role: 'Intern UX/UI Designer',
    company: 'Weable Technology Solutions Company Limited',
    highlights: [
      'Contributed to web interface design for corporate projects, learning from the Team Lead and collaborating with UI/UX and Development teams.',
      'Proposed UI/UX improvements aligned with project goals; many were approved for implementation.',
      'Designed company introduction websites and landing pages, gaining hands-on experience with components, design systems and variables.',
    ],
  },
];
