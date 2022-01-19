module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: 'evangelionunit.one/:path*',
        destination: 'www.evangelionunit.one',
        permanent: true,
      },
    ]
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
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
