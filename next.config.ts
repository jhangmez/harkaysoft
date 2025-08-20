import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

() => {
  if (process.env.NODE_ENV === "development") {
    setupDevPlatform();
  }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "vrf137hlqv.ufs.sh",
        port: "",
        pathname: "/f/**",
      },
    ],
  },
};

export default nextConfig;
