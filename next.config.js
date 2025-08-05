// next.config.js or .mjs
const createNextIntlPlugin = require('next-intl/plugin');

const nextConfig = {
  experimental: {
    turbo: {}, // Keep if needed
  }
};

module.exports = createNextIntlPlugin()(nextConfig);
