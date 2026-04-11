/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Change the basePath to match your repository name
  basePath: '/turbo-care-vault',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
