module.exports = {
  reactStrictMode: true,

async rewrites() {
  return [
  {
  "rewrites": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "example.evangelionunit.one"
        }
      ],
        destination: 'https://example.example.com'
      },
    ]
  },
}
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key:'Cache-Control',
            value:'s-maxage=3600, stale-while-revalidate=30'
          },
        ],
      },
    ]
  },
}
