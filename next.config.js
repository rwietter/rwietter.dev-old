// @type {import('next').NextConfig}
const withImages = require('next-images')

const nextConfig = withImages({
  reactStrictMode: true,
  env: {
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
    SPOTIFY_OAUTH_TOKEN: process.env.SPOTIFY_OAUTH_TOKEN,
  },
  images: { domains: ["localhost", "i.scdn.co"] },
});

module.exports = nextConfig;
