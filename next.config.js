module.exports = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
          {
            source: '/examplepath',
            destination: 'https://example.com',
            has: [{ type: 'host', value: 'www.evangelionunit.one' }],
          headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=1, stale-while-revalidate=59",
          },
      },
    ]
  },
}

module.exports = nextConfig;
