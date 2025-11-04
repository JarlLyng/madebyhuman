import type { NextConfig } from "next";

// Use environment variable for basePath, default to empty for local dev
const basePath = process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? '/madebyhuman' : '');

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
};

export default nextConfig;
