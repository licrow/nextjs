module.exports = {
  reactStrictMode: true,
  
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "max-age=0",
          },
        ],
      },
    ];
  },  
};
