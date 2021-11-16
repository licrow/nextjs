module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:slug*',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
