/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dcxaangkl/image/upload/v1692193269/**",
      },
    ],
  },
};

module.exports = nextConfig;
