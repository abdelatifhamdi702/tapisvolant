const path = require('path')
const { i18n } = require('./next-i18next.config')
module.exports = {
  env: {
    host: 'localhost',
    port: '3000',
    STRIPE_PUBLIC_API_KEY:
      'pk_test_51MYrG3IiBauyueh2CTnhDg1my0ZpNCxqv41OHp5SHglle3ez8G495KZuXbBt6pbwXzQkaiYV0Kn5ozuMDioktomk00VD8PTa5m',
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
