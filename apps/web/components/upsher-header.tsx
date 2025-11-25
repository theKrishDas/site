import { cn } from "@repo/utils"
import Link from "next/link"
import { Container } from "./container"

export function Header() {
  return (
    <Container asChild>
      <nav className="UpsherHeader mt-12 mb-25 select-none sm:mt-32 md:mt-16">
        <div className="relative w-fit">
          <Link
            className={cn(
              "cursor-default font-semibold font-sfpro text-[oklch(0.375_0_0)] tracking-[-0.01em] after:content-['.'] dark:text-[oklch(0.875_0_0)]",
              "decoration-2 decoration-ios-blue hover:underline"
            )}
            href="/"
          >
            Upsher
            <span className="absolute inset-0" />
          </Link>
          <p className="text-label-secondary">Webapp engineer</p>
        </div>
      </nav>
    </Container>
  )
}
