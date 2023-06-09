/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'nextjs-headless-wp-blog.local',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig;
