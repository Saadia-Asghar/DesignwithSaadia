import type { NextConfig } from "next";

// GitHub Pages serves the site from /DesignwithSaadia; Vercel/Netlify serve it from /.
const base = process.env.GITHUB_PAGES === "true" ? "/DesignwithSaadia" : "";

const nextConfig: NextConfig = {
  output: "export",
  ...(base ? { basePath: base, assetPrefix: base } : {}),
  env: { NEXT_PUBLIC_BASE_PATH: base },
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
