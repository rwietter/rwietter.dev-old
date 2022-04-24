// @type {import('next').NextConfig}
const withImages = require('next-images');

const nextConfig = withImages({
  reactStrictMode: true,
  env: {
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
    SPOTIFY_OAUTH_TOKEN: process.env.SPOTIFY_OAUTH_TOKEN,
    ACCUWEATHER_CURRENT_CONDITIONS: process.env.ACCUWEATHER_CURRENT_CONDITIONS,
    ACCUWEATHER_API_KEY: process.env.ACCUWEATHER_API_KEY,
    ACCUWEATHER_CITY_ID: process.env.ACCUWEATHER_CITY_ID,
  },
  images: { domains: ['localhost', 'i.scdn.co', 'rwietter-strapi-cms.herokuapp.com'] },
});

module.exports = nextConfig;
