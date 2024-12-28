import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Replace with your image domain
        port: '', // Optional, keep empty for default
        pathname: '/**', // Match all paths on the domain
      },
    ],
  },
};

export default nextConfig;
