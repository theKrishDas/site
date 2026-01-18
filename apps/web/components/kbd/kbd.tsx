import "./kbd.css"
import { cn } from "@repo/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  // TODO: Remove this `not-prose` className later when components are finalized
  return <kbd className={cn("Kbd not-prose", className)} {...props} />
}

export { Kbd }
