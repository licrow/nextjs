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
        source: '/about',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload;',
          },
        ],
      },
    ]
  },
}
