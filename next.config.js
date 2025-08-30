/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  distDir: 'out',   // Specify 'out' as the custom build directory
  images: {
    unoptimized: true // Required for static export
  }
};

module.exports = nextConfig;
