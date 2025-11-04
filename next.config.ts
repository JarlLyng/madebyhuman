import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/madebyhuman' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/madebyhuman' : '',
};

export default nextConfig;
