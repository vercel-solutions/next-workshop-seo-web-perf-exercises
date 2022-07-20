/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['restaurants-images-test.s3.amazonaws.com'],
    deviceSizes: [1080, 1920, 2048, 3840],
    imageSizes: [256, 1024, 2048],
  },
}
