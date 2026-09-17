import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/brochure',
        destination: '/brochure/index.html',
      },
      {
        source: '/newborn-welcome',
        destination: '/newborn-welcome/index.html',
      },
      {
        source: '/family-welcome',
        destination: '/family-welcome/index.html',
      },
      {
        source: '/pumpkin-welcome',
        destination: '/pumpkin-welcome/pumpkin-patch-welcome-guide.pdf',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
