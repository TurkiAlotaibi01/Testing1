const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/Testing1",
        assetPrefix: "/Testing1/",
        trailingSlash: true,
        images: {
          unoptimized: true
        }
      }
    : {})
};

export default nextConfig;
