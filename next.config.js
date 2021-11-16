module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/example/:path*',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
