/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,

  // Otimização de imagens para carregamento mais rápido
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // Cabeçalhos de segurança exigidos pelas boas práticas do Google
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

  // URLs limpas e amigáveis para melhor indexação
  trailingSlash: false,
};

module.exports = nextConfig;
