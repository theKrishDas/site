import { Container } from "./container"
import { ThemeToggle } from "./theme-toggle"

export function Footer() {
  const footerInfo = {
    copyright: "Upsher",
    location: "Siliguri, India",
  }

  return (
    <Container asChild>
      {/** setting explicit height prevents layout shift caused by the ThemeToggle */}
      <footer className="mt-20 mb-6 flex min-h-6 w-full items-center justify-between">
        <div className="pointer-events-none flex select-none items-center gap-2.5 font-jetbrains-mono font-normal text-label-tertiary text-sm tracking-tight">
          <span>
            <span className="copyright mr-1 font-sfpro">&copy;</span>
            {footerInfo.copyright}
          </span>
          <span className="separator">/</span>
          <span className="before:mr-1.5 before:font-sfpro before:content-['􀙊']">
            {footerInfo.location}
          </span>
        </div>

        <ThemeToggle />
      </footer>
    </Container>
  )
}
