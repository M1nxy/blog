/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  distDir: 'dist',
  basePath: '/blog',
  images: {
    formats: ['image/webp'],
    unoptimized: true
  }
};

module.exports = nextConfig;
