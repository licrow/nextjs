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
  
  async headers() {
    return [
      {
        source: "/*",
        headers: [
          {
            key: "Cache-Control",
            value: "max-age=1",
          },
        ],
      },
    ];
  },  
};

module.exports = nextConfig;
