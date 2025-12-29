import "./kbd.css"
import { cn } from "@repo/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return <kbd className={cn("Kbd", className)} {...props} />
}

export { Kbd }
