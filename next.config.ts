import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ashyo.store',
        pathname: '/files/**',
      },
      {
        protocol: 'https',
        hostname: 'api.ashyo.fullstackdev.uz',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
