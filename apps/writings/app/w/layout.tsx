import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { Footer } from "@/components/footer"
import { Header } from "@/components/upsher-header"
import { baseOptions } from "@/lib/layout.shared"
import { source } from "@/lib/source"

export default function Layout({ children }: LayoutProps<"/w">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      nav={{ component: <Header /> }}
      searchToggle={{ enabled: false }}
      sidebar={{ enabled: false }}
    >
      {children}
      <Footer />
    </DocsLayout>
  )
}
