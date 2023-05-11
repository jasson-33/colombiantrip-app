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
};

module.exports = nextConfig;
