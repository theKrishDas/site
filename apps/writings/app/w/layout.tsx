import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
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

function Footer() {
  const footerInfo = {
    copyright: "Upsher",
    location: "Siliguri, India",
  }

  return (
    <div className="mx-auto mt-20 mb-6 flex w-full items-center justify-between px-4 md:max-w-160 md:px-0">
      <div className="pointer-events-none flex select-none items-center gap-1 font-jetbrains-mono font-normal text-label-tertiary text-sm tracking-tight">
        <span className="copyright font-sfpro">&copy;</span>
        <span>{footerInfo.copyright}</span>
        <span className="separator">/</span>
        <span>{footerInfo.location}</span>
      </div>
      <ThemeToggle />
    </div>
  )
}
