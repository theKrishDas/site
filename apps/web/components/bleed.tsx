import { Slot } from "@radix-ui/react-slot"
import { cn } from "@repo/utils"

export type BleedBreakpoints = "sm" | "md" | "lg" | "all"

export interface BleedProps extends React.ComponentProps<"div"> {
  asChild?: boolean
  breakpoint?: BleedBreakpoints
  fitToScreen?: boolean
}

function Bleed({
  className,
  asChild = false,
  breakpoint = "sm",
  fitToScreen = false,
  ...rest
}: BleedProps) {
  const bleedBreakpointClasses: Record<BleedBreakpoints, string> = {
    sm: "md:w-full",
    md: "lg:w-full",
    lg: "xl:w-full",
    all: "",
  }

  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      className={cn(
        "[--max-bleed-width:min(68.75rem,98vw)]",
        "bleed-container -translate-x-1/2 relative left-1/2 block",
        bleedBreakpointClasses[breakpoint],
        fitToScreen ? "w-screen" : "w-(--max-bleed-width)",
        className
      )}
      data-bleed-breakpoint={breakpoint}
      data-bleed-fit={fitToScreen}
      {...rest}
    />
  )
}
export { Bleed }
