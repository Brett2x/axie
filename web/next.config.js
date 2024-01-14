module.exports = {
  async redirects() {
    return [
      {
        source: '/nova',
        destination: 'https://buy.stripe.com/7sIdRPfcM3m63jGfZb',
        permanent: false,
      },
      {
        source: '/adapt',
        destination: 'https://buy.stripe.com/9AQ6pnaWw2i2dYkfZ3',
        permanent: false,
      },
      // Add more redirects as needed
      // {
      //   source: '/source-path',
      //   destination: '/destination-path',
      //   permanent: true,
      // },
    ];
  },
};

