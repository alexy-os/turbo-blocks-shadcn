/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // или 'export' если вы хотите статический экспорт
  distDir: '.next',      // директория для сборки (по умолчанию '.next')
}

module.exports = nextConfig 