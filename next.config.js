/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,

  // Otimizações para imagens e desempenho
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // Cabeçalhos de segurança e cache (ajuda em conformidade e velocidade)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // URLs amigáveis e sem extensão
  trailingSlash: false,
};

module.exports = nextConfig;
