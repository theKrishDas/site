import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle"
import { Container } from "./container"

export function Footer() {
  const footerInfo = {
    copyright: "Upsher",
    location: "Siliguri, India",
  }

  return (
    <Container asChild>
      <footer className="mt-20 mb-6 flex w-full items-center justify-between">
        <div className="pointer-events-none flex select-none items-center gap-1 font-jetbrains-mono font-normal text-label-tertiary text-sm tracking-tight">
          <span className="copyright font-sfpro">&copy;</span>
          <span>{footerInfo.copyright}</span>
          <span className="separator">/</span>
          <span>{footerInfo.location}</span>
        </div>
        <ThemeToggle />
      </footer>
    </Container>
  )
}
