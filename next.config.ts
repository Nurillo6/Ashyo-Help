import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ashyo.store',
        pathname: '/files/**',
      },
    ],
  },
};

export default nextConfig;
