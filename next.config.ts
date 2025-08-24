import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static HTML export
  distDir: 'out',   // Specify 'out' as the custom build directory
  images: {
    unoptimized: true // Required for static export
  }
};

export default nextConfig;
