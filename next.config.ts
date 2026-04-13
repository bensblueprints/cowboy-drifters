import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "wyocowboydrifters.com",
      },
      {
        protocol: "https",
        hostname: "*.wyocowboydrifters.com",
      },
    ],
  },
};

export default nextConfig;
