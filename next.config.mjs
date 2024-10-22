/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "jenvweacjgfqxxstkfyy.supabase.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
