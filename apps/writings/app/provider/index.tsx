"use client"

import { RootProvider } from "fumadocs-ui/provider/next"

export default function Provider({ children }: { children: React.ReactNode }) {
  return <RootProvider>{children}</RootProvider>
}
