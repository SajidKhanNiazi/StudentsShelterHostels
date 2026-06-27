/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    formats: ['image/webp'],
    deviceSizes: [360, 640, 768, 1024, 1280],
    imageSizes: [120, 240, 400],
  },
};

export default nextConfig;
