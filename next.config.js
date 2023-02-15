const path = require('path')

module.exports = {
  env: {
    host: 'localhost',
    port: '3000',
    STRIPE_PUBLIC_API_KEY:
      'pk_test_51MYrG3IiBauyueh2CTnhDg1my0ZpNCxqv41OHp5SHglle3ez8G495KZuXbBt6pbwXzQkaiYV0Kn5ozuMDioktomk00VD8PTa5m',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
}
