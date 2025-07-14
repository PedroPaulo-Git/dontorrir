import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Para exportação estática (apenas front)
  output: 'export',
  trailingSlash: true,
  // Ignorar erros de ESLint e TypeScript no build (caso necessário)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
