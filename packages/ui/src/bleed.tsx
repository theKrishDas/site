import { Slot } from "@radix-ui/react-slot"

export type BleedBreakpoints = "sm" | "md" | "lg" | "all"
export interface BleedProps extends React.ComponentProps<"div"> {
  asChild?: boolean
  breakpoint?: BleedBreakpoints
  fitToScreen?: boolean
}

/**
 * A container component that breaks out of its parent's padding and constraints
 * to span either a fixed maximum width or the full viewport width.
 *
 * @example
 * ```tsx
 * // Break out at medium breakpoint with maximum bleed width
 * <Bleed breakpoint="md">
 *   <HeroImage />
 * </Bleed>
 *
 * // Break out at small breakpoint and span full viewport
 * <Bleed breakpoint="sm" fitToScreen>
 *   <FullWidthBanner />
 * </Bleed>
 * ```
 *
 * @param props.asChild - Use the child element as the container (Radix UI Slot pattern)
 * @param props.breakpoint - Viewport breakpoint when bleed effect activates
 * @param props.fitToScreen - Span full viewport width instead of maximum bleed width
 */
export function Bleed({
  className,
  asChild = false,
  breakpoint = "sm",
  fitToScreen = false,
  ...rest
}: BleedProps) {
  const bleedBreakpointClasses: Record<BleedBreakpoints, string> = {
    sm: "ui:md:w-full",
    md: "ui:lg:w-full",
    lg: "ui:xl:w-full",
    all: "",
  }

  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      className={`--ui-bleed-container ui:-translate-x-1/2 ui:relative ui:left-1/2 ui:block ui:[--max-bleed-width:min(68.75rem,98vw)] ${bleedBreakpointClasses[breakpoint]} ${fitToScreen ? "ui:w-screen" : "ui:w-(--max-bleed-width)"} ${className}`}
      data-bleed-breakpoint={breakpoint}
      data-bleed-fit={fitToScreen}
      {...rest}
    />
  )
}
