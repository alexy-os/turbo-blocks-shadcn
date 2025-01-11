/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  experimental: {
    outputFileTracingIncludes: {
      '/**': ['./public/**/*']
    }
  }
}

export default nextConfig 