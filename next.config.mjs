/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/campanion" : "",
  assetPrefix: isProd ? "/campanion" : "",
};

export default nextConfig;
