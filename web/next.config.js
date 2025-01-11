/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  // Важно для Vercel - указываем, что нужно копировать public
  experimental: {
    outputFileTracingIncludes: {
      '/**': ['./public/**/*']
    }
  }
}

module.exports = nextConfig 