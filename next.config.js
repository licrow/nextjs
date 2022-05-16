module.exports = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
          {
            source: '/:path*',
            destination: 'https://example.example.com',
            has: [{ type: 'host', value: 'example.evangelionunit.one' }],
      },
    ]
  },
}
