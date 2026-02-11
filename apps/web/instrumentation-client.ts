import posthog from "posthog-js"
import { POSTHOG_PROXY_PATH } from "./lib/posthog-config"

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: POSTHOG_PROXY_PATH,
    ui_host: "https://us.posthog.com",
    defaults: "2026-01-30",
  })
} else {
  console.warn(
    "NEXT_PUBLIC_POSTHOG_KEY environment variable is not set. PostHog analytics will not be initialized."
  )
}
