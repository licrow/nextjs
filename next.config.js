module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'example.evangelionunit.one',
          },
        ],
        destination: 'https://example.example.com/another-page',
      },
    ]
  },
}
