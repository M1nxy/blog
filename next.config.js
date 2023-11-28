/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  distDir: 'dist',
  images: {
    formats: ['image/webp'],
    unoptimized: true
  }
};

module.exports = nextConfig;
