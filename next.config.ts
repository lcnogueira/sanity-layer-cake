import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true //https://www.sanity.io/learn/course/controlling-cached-content-in-next-js/debugging-caching-in-development
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      }
    ]
  }
};

export default nextConfig;
