module.exports = {
  reactStrictMode: true,

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
