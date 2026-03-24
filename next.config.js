/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  
  async redirects() {
    return [
      // www → non-www für Hauptdomain
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.persoenlichkeitstest-kostenlos.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/:path*",
        permanent: true,
      },
      // www-Varianten aller Keyword-Domains
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rizz-test.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/rizz",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rizz-score.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/rizz",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.aura-check-online.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/aura",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.aura-test-kostenlos.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/aura",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mein-aura-test.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/aura",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.brainrot-test.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/brainrot",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.npc-test.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/npc",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dark-triad-test.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/dark",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dark-personality-test.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/dark",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.toxicity-test.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/toxicity",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.red-flag-test.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/redflag",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.welcher-typ-bin-ich.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.wer-bin-ich-test.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.der-persoenlichkeitstest.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ki-persoenlichkeitstest.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/ki-test",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.persoenlichkeitstest-online.de" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.findur.app" }],
        destination: "https://persoenlichkeitstest-kostenlos.de/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
