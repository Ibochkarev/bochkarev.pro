const path = require('path')
const withPWA = require('next-pwa')
require('dotenv').config()

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  env: {
    API_URL: process.env.API_URL,
  },

  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['public'] = path.join(__dirname, 'public')

    return config
  },
})
