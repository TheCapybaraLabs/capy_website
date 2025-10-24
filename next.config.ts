import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 30 * 24 * 60 * 60, // 30 days
  },
};

export default nextConfig;
