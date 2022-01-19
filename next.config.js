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
  
  async headers() {
    return [
      {
        key:'strict-transport-security',
        value:'max-age=63072000; includeSubDomains; preload',
      },
    ]
  },
}
