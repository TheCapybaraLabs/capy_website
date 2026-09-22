import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 30 * 24 * 60 * 60, // 30 days
    // 90 além do padrão: as screenshots da /labschat têm texto de interface,
    // que o WebP em qualidade 75 borra.
    qualities: [75, 90],
  },
};

export default nextConfig;
