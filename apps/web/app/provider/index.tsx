"use client"

import { ConvexProvider, ConvexReactClient } from "convex/react"
import { RootProvider } from "fumadocs-ui/provider/next"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <RootProvider search={{ enabled: false }}>{children}</RootProvider>
    </ConvexProvider>
  )
}
