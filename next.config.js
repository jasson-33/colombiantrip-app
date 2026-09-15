/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'colombiantrip-bkt.s3.amazonaws.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/thank-you-:slug',
        destination: '/thank-you/:slug',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/experiences/coffe-mountains-colorful-villages-green-landscapes',
        destination: '/experiences/coffee-region-cocora-valley-lodge',
        permanent: true,
      },
      {
        source: '/experiences/coffe-mountains-colorful-villages-green-landscapes-2',
        destination: '/experiences/casanare-llanero-cowboy-experience',
        permanent: true,
      },
      {
        source: '/experiences/coffe-mountains-colorful-villages-green-landscapes-3',
        destination: '/experiences/cano-cristales-five-colors-river',
        permanent: true,
      },
      {
        source: '/experiences/bogota-narino-medellin-cartagena',
        destination: '/experiences/narino-las-lajas-sanctuary-heritage',
        permanent: true,
      },
      {
        source: '/experiences/medellin-coffee-region-tayrona-cartagena-2',
        destination: '/experiences/katanzama-indigenous-community-sierra-nevada',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
