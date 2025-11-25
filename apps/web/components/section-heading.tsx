import { cn } from "@repo/utils"

export function Heading({ className, ...rest }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "mt-14 mb-6 font-jetbrains-mono font-normal text-label-secondary text-sm uppercase tracking-tight",
        className
      )}
      {...rest}
    />
  )
}
