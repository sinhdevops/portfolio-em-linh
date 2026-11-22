export const site = {
  name: 'MyLink',
  title: 'MyLink - Portfolio UIUX Design',
  description:
    'Portfolio of Tran Thi My Linh (MyLink), a Product, UI/UX & Brand Designer crafting user-centered websites, apps and design systems.',
  /** Public origin, used for canonical URLs, the sitemap and social previews. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
  locale: 'en',
  owner: 'Tran Thi My Linh',
} as const;

export const contact = {
  email: 'tranmylinh849@gmail.com',
  phone: '0338 909 973',
  phoneHref: 'tel:0338909973',
  address: 'Hoa Cuong, TP Da Nang',
  addressLocal: 'Hòa Cường, TP Đà Nẵng',
  mapUrl: 'https://www.google.com/maps',
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://fb.com/linhlinh.tran.3133',
    icon: '/images/icons/facebook.svg',
  },
  { label: 'Behance', href: 'https://www.behance.net/tenglsg', icon: '/images/icons/behance.svg' },
];

export type NavItem = { label: string; href: string };

/** Header navigation (the blog link is intentionally not shown in the header). */
export const navigation: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#service' },
  { label: 'Portfolio', href: '/my-portfolio' },
  { label: 'Experience', href: '/experience' },
];
