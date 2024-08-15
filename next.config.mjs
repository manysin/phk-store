/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/img/*",
      },
      {
        protocol: "https",
        hostname: "150698241.v2.pressablecdn.com",
        pathname: "/big-store-electro/wp-content/uploads/sites/164/2020/07/*",
      },
    ],
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },
};

export default nextConfig;
