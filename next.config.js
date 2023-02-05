/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = {
  assetPrefix: ".", // <-- this is the important part
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        // hostname: "example.com",
        // port: "",
        pathname: "/asset",
      },
    ],
  },
};
module.exports = nextConfig;
