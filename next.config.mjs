/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['v0.blob.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Remove experimental CSS optimization that requires critters
  experimental: {
    // inlineCss: true, // Removed - requires critters
    // optimizeCss: true, // Removed - requires critters
    optimizeFonts: true, // Keep this as it doesn't require critters
  },
  // Optimize bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize images
  swcMinify: true,
}

export default nextConfig
