module.exports = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
          {
            source: '/examplepath',
            destination: 'https://example.com',
            has: [{ type: 'host', value: 'www.evangelionunit.one' }],
      },
    ]
  },
}
