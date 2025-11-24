import { cn } from "@repo/utils"
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import Link from "next/link"
import { baseOptions } from "@/lib/layout.shared"
import { source } from "@/lib/source"

export default function Layout({ children }: LayoutProps<"/w">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      nav={{ component: <Nav /> }}
      searchToggle={{ enabled: false }}
      sidebar={{ enabled: false }}
    >
      {children}
      <Footer />
    </DocsLayout>
  )
}

function Nav() {
  return (
    <nav className="mx-auto mt-12 mb-25 w-full select-none px-4 md:max-w-160 md:px-0">
      <Link
        className={cn(
          "cursor-pointer font-medium text-[oklch(0.375_0_0)] tracking-[-0.01em] after:content-['.'] dark:text-[oklch(0.875_0_0)]",
          "decoration-2 decoration-ios-blue hover:underline"
        )}
        href="/"
      >
        Upsher
      </Link>
      <p className="text-label-secondary">Webapp engineer</p>
    </nav>
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
        <span className="copyright font-inter">©</span>
        <span>{footerInfo.copyright}</span>
        <span className="separator">/</span>
        <span>{footerInfo.location}</span>
      </div>
      <ThemeToggle />
    </div>
  )
}
