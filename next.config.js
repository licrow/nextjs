module.exports = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/hello-vercel',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
