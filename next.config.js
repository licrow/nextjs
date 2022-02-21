module.exports = {
  reactStrictMode: true,
  
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
