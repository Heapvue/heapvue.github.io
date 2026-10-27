/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
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
        source: '/products',
        destination: '/solutions/ecommerce-digital-experience',
        permanent: true,
      },
      {
        source: '/consulting',
        destination: '/consulting/digital-transformation',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/solutions/platform-development',
        permanent: true,
      },
      {
        source: '/industries',
        destination: '/industries/healthcare',
        permanent: true,
      },
    ];
  },
  async headers() {
    // Only apply asset caching in production; Next.js handles /_next/static caching automatically.
    if (process.env.NODE_ENV !== 'production') {
      return [];
    }
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
