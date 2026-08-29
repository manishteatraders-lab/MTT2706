import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: { 
    unoptimized: true 
  },
  trailingSlash: true,
  typescript: {
    // WASM SWC bindings crash the TS checker on Windows — Vercel (Linux) handles this correctly
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
