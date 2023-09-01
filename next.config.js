/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
  env: {
    GITHUB_APP_CLIENT_ID: "Iv1.498282d92b4b0dc4",
    GITHUB_APP_CLIENT_SECRET: "251d06527172fa0c686bf0d6ffcf3e1531dd54f2",
    NEXTAUTH_SECRET: "aWgJ9qDhBgezSeEr7QD8AwKpbW",
  },
};

module.exports = nextConfig;
