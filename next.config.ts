import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Keep the dev badge clear of the bottom-left "Need help?" button
  devIndicators: { position: "bottom-right" },
  // 90 is used for photo cards so campus photos stay crisp
  images: { qualities: [75, 90] },
  partialPrefetching: true,
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
