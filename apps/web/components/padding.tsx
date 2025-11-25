import { cn } from "@repo/utils"

export function Padding({ className, ...rest }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto h-fit w-md", className)} {...rest} />
}
