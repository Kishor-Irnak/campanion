import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If your repo is kishor-irnak/campanion, use:
  // basePath: "/campanion",
  // assetPrefix: "/campanion",
};

export default nextConfig;
