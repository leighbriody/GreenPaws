/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    GITHUB_APP_CLIENT_ID: "Iv1.498282d92b4b0dc4",
    GITHUB_APP_CLIENT_SECRET: "251d06527172fa0c686bf0d6ffcf3e1531dd54f2",
    NEXTAUTH_SECRET: "aWgJ9qDhBgezSeEr7QD8AwKpbW",
    GOOGLE_CLIENT_ID:
      "244155620919-3cusaaik2fgv0nu94cdggh4fism98kfc.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
