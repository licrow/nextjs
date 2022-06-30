module.exports = {
  reactStrictMode: true,
  
  async headers() {
    return [
      {
        source: "*",
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
