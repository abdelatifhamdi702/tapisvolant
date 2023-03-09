const path = require('path')
const { i18n } = require('./next-i18next.config')
module.exports = {
  env: {
    host: 'localhost',
    port: '3000',
    STRIPE_PUBLIC_API_KEY: '',
  },
  i18n,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    }

    return config
  },
}
