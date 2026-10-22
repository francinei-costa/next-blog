import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  // Defina seu perfil customizado aqui
  cacheLife: {
    cincoMinutos: {
      stale: 300, // 5 min
      revalidate: 300, // 5 min
      expire: 600, // Expirar totalmente em 10 min, por exemplo
    },
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
