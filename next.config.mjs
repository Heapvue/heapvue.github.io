/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_FORM_ID: process.env.NEXT_PUBLIC_GOOGLE_FORM_ID,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
