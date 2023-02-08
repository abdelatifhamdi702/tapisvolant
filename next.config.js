const path = require('path')

module.exports = {
  env: {
    host: 'localhost',
    port: '3000',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
}
