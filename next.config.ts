import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // A plain static site in out/, so it can be hosted on GitHub Pages.
  output: "export",
  // "/desktop/" becomes desktop/index.html, which every static host serves.
  trailingSlash: true,
  // The folder the site is published in, if any (see components/desk/asset.ts).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default nextConfig;
