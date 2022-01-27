module.exports = {
  reactStrictMode: true,
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key:'access-control-allow-origin',
            value::'www.evangelionunit.one'
          },
        ],
      },
    ]
  },
}
