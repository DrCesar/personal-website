/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return ["/writing", "/projects", "/about"].map((source) => ({
      source,
      destination: "/",
      permanent: false,
    }));
  },
};

module.exports = nextConfig;
