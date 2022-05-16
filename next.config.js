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
}
