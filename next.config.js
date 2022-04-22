// @type {import('next').NextConfig}
const withImages = require('next-images')

const nextConfig = withImages({
  reactStrictMode: true,
  env: {
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
  },
  images: { domains: ["localhost"] },
});

module.exports = nextConfig;
