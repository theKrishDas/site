import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { baseOptions } from "@/lib/layout.shared"
import { source } from "@/lib/source"

export default function Layout({ children }: LayoutProps<"/w">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      nav={{ enabled: false }}
      searchToggle={{ enabled: false }}
      sidebar={{ enabled: false }}
    >
      {children}
    </DocsLayout>
  )
}
