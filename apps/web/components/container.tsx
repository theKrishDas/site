import { Slot } from "@radix-ui/react-slot"
import { cn } from "@repo/utils"

function Container({
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
      className={cn(
        "__container mx-auto w-full md:max-w-160",
        "px-6 md:px-0",
        className
      )}
      {...rest}
    />
  )
}
export { Container }
