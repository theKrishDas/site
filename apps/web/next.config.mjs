import { createMDX } from "fumadocs-mdx/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactCompiler: true,
  allowedDevOrigins: ["192.168.1.*"],
  transpilePackages: ["@repo/utils"],
  images: {
    remotePatterns: [
      // Docs: https://docs.uploadthing.com/working-with-files
      {
        protocol: "https",
        hostname: `${process.env.UPLOADTHING_APP_ID}.ufs.sh`,
        pathname: "/f/*",
      },
    ],
  },
  devIndicators: { position: "top-right" },
}

const withMDX = createMDX()

export default withMDX(nextConfig)
