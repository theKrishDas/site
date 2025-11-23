"use client"

import { RootProvider } from "fumadocs-ui/provider/next"

export default function Provider({ children }: { children: React.ReactNode }) {
  return <RootProvider search={{ enabled: false }}>{children}</RootProvider>
}
