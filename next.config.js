/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static export if deploying to static hosting
  // output: 'export',
};

module.exports = nextConfig;
