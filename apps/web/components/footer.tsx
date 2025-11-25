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

        {/* <div className=""> */}
        {/*   <span className="select-none font-jetbrains-mono font-normal text-label-tertiary text-sm uppercase tracking-tight before:mr-1.5 before:font-sfpro before:content-['􀆮']"> */}
        {/*     System */}
        {/*   </span> */}
        {/* </div> */}

        <ThemeToggle />
      </footer>
    </Container>
  )
}
