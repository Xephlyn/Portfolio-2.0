/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disable strict mode for canvas-based games
    eslint: {
      ignoreDuringBuilds: true,
    },
    compiler: {
      // Enables the styled-components SWC transform if you're using styled components
      styledComponents: true
    },
    // Configure exportPathMap to skip problematic pages during static export
    experimental: {
      // Disable static optimization attempts
      disableOptimizedLoading: true,
      // Force SSR to skip specific paths
      appDir: true,
      optimizeCss: false,
      esmExternals: true
    },
    // Skip specific pages during static generation
    unstable_excludeFiles: [
      '**/app/projects/games/brickbreaker/**/*', // Skip all files in this directory
    ],
    // Prevent specific paths from being statically optimized
    images: {
      // Configure image domains if you're using external images
      domains: [],
      // Disable image optimization if causing issues
      unoptimized: false,
    },
  };
  
  module.exports = nextConfig;
