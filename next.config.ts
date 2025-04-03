import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["source.unsplash.com"],
  },
  experimental: {
    optimizeCss: false, // Disables LightningCSS optimization
  },
};

export default nextConfig;
