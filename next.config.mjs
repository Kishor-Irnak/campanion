const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? "/campanion" : "",
  assetPrefix: isGithubActions ? "/campanion" : "",
};

export default nextConfig;
