/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'paperplane.com.co'
      },
    ],
  }
}

module.exports = nextConfig
