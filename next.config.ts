import type { NextConfig } from "next";

// Use NEXT_PUBLIC_BASE_PATH for consistency with client-side code
// Default to empty for local dev, /madebyhuman for production builds
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/madebyhuman' : '');

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
};

export default nextConfig;
