import { createMDX } from "fumadocs-mdx/next"
import { POSTHOG_PROXY_PATH } from "./lib/posthog-config.ts"

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
  /**
   * PostHog reverse proxy configuration
   *
   * Routes PostHog requests through the proxy path to bypass ad blockers that block posthog.com.
   * This ensures analytics work reliably by serving PostHog's script and API from our domain.
   *
   * - {POSTHOG_PROXY_PATH}/static/* → PostHog static assets (script files)
   * - {POSTHOG_PROXY_PATH}/* → PostHog API endpoints (event capture)
   */
  // biome-ignore lint/suspicious/useAwait: Next.js requires rewrites() to be async per framework API contract
  async rewrites() {
    return [
      {
        source: `${POSTHOG_PROXY_PATH}/static/:path*`,
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: `${POSTHOG_PROXY_PATH}/:path*`,
        destination: "https://us.i.posthog.com/:path*",
      },
    ]
  },
  skipTrailingSlashRedirect: true,
}

const withMDX = createMDX()

export default withMDX(nextConfig)
