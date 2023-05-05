/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com', 'pixabay.com', 'cdn.sanity.io'],
  },
  transpilePackages: ["ui"],
  reactStrictMode: true,
}

module.exports = nextConfig