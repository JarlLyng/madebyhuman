import type { NextConfig } from "next";

// With custom domain (madebyhuman.iamjarl.com), we no longer need basePath
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
