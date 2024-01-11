const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		runtimeCaching,
	},
	images: {
    domains: [
      "i0.wp.com",
      "apod.nasa.gov",
      "cdn.arstechnica.net",
      "spacepolicyonline.com",
      "image.cnbcfm.com"
    ],
  },
	experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
})
