import { Slot } from "@radix-ui/react-slot"
import { cn } from "@repo/utils"

export function Spacer({
  className,
  asChild = false,
  as = "div",
  ...rest
}: React.ComponentProps<"div"> & {
  asChild?: boolean
  as?: "div" | "section"
}) {
  const Comp = asChild ? Slot : as
  return (
    <Comp
      aria-hidden={true}
      className={cn("__spacer inline-block h-3", className)}
      {...rest}
    />
  )
}
