import type { MetadataRoute } from 'next';

import { blogPosts } from '@/content/blog';
import { portfolioCategories } from '@/content/portfolio';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/my-portfolio', '/blogs', '/contact-us', '/experience'];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}` })),
    ...portfolioCategories.map(({ slug }) => ({ url: `${site.url}/my-portfolio/${slug}` })),
    ...blogPosts.map(({ slug }) => ({ url: `${site.url}/blogs/${slug}` })),
  ];
}
