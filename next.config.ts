import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/campanion",
  assetPrefix: "/campanion",
};

export default nextConfig;
