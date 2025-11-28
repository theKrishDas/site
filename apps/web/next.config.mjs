import { createMDX } from "fumadocs-mdx/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactCompiler: true,
  allowedDevOrigins: ["192.168.1.*"],
  transpilePackages: ["@repo/utils"],
  devIndicators: {
    position: "top-right",
  },
}

const withMDX = createMDX()

export default withMDX(nextConfig)
