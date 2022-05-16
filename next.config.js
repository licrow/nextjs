module.exports = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      {
        beforeFiles: [
          {
            source: '/:path*',
            destination: 'https://example.example.com',
            has: [{ type: 'host', value: 'example.evangelionunit.one' }],
          },
        ],
      },
    ]
  },
}
