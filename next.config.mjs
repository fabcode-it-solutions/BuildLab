/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
