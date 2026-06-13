/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '*.local',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
