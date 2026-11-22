import type { NextConfig } from 'next';

import { legacyPortfolioRedirects } from './src/content/portfolio';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 768, 1080, 1440, 1920, 2560],
    imageSizes: [32, 64, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async redirects() {
    return legacyPortfolioRedirects.map(({ from, to }) => ({
      source: `/my-portfolio/${from}`,
      destination: `/my-portfolio/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
