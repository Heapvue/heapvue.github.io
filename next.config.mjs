/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/solutions/platform-development',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/solutions/platform-development',
        permanent: false,
      },
      {
        source: '/consulting',
        destination: '/consulting/digital-transformation',
        permanent: false,
      },
      {
        source: '/products',
        destination: 'https://Vuecart.heapvue.com/in-en',
        permanent: false,
      },
      {
        source: '/product',
        destination: 'https://Vuecart.heapvue.com/in-en',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
