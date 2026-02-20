/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/campanion",
  assetPrefix: "/campanion",
};

export default nextConfig;
