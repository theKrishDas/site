import { Slot } from "@radix-ui/react-slot"
import { cn } from "@repo/utils"

// TODO: Move theses to lib
// biome-ignore format: preserve array layout
export const placementOptions = ["top-right", "bottom-right", "top-left", "bottom-left", "top-center", "bottom-center", "left-center", "right-center", "center"] as const
export type PlacementOption = (typeof placementOptions)[number]
const alignmentClasses: Record<PlacementOption, string> = {
  "top-left": "flex items-start justify-start",
  "top-center": "flex items-start justify-center",
  "top-right": "flex items-start justify-end",

  center: "flex items-center justify-center",

  "left-center": "flex items-center justify-start",
  "right-center": "flex items-center justify-end",

  "bottom-left": "flex items-end justify-start",
  "bottom-center": "flex items-end justify-center",
  "bottom-right": "flex items-end justify-end",
}

export interface PreviewProps extends React.ComponentProps<"div"> {
  asChild?: boolean
  placement?: PlacementOption | "none"
  fullBleed?: boolean
}

/**
 * Renders a live component preview without source code.
 */
export function Preview(props: PreviewProps) {
  const {
    style,
    className,
    asChild,
    placement = "center",
    fullBleed = false,
    ...rest
  } = props
  const Comp = asChild ? Slot : "div"
  const placementClass = placement !== "none" && alignmentClasses[placement]

  return (
    <Comp
      className={cn(
        // TODO: use this type of spacing scale for the height
        // https://github.com/heroui-inc/heroui/blob/main/packages/components/spacer/src/utils.ts
        "relative my-[2em] h-auto min-h-20 overflow-auto rounded-[1.125rem] text-base", // min-h-72 p-6
        "border border-gray-6/50 bg-white shadow-[inset_0_1px,inset_0_0_0_1px] shadow-black/3 dark:bg-neutral-950 dark:shadow-white/1.5",
        fullBleed
          ? "max-sm:full-bleed max-w-275 max-sm:w-[calc(100vw-0.75rem)] max-sm:rounded-xl"
          : "w-full",
        placementClass,
        className
      )}
      style={{ cornerShape: "squircle", ...style } as React.CSSProperties}
      {...rest}
    />
  )
}
