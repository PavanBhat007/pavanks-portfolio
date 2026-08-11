// next.config.js or next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
      },
      {
        protocol: "https",
        hostname: "media.steampowered.com",
      },
    ],
  },
};

export default nextConfig;
