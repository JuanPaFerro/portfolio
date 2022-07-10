/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.postimg.cc", "i.ibb.co"],
  },
  env: {
    KEY: "sf0AtCSWWEFHaKirj",
    SERVICE_ID: "service_vh9iinn",
    TEMPLATE_ID: "template_k4pymtw",
  },
};

module.exports = nextConfig;
