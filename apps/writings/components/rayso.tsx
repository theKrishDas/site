import { cn } from "@repo/utils"

export default function Rayso({
  className,
  url,
  ...rest
}: React.ComponentProps<"div"> & { url?: string }) {
  const imageUrl =
    url ||
    "https://github.com/zhichaoh/catppuccin-wallpapers/blob/main/gradients/magenta_blue.png?raw=true"

  return (
    <div
      className={cn(
        "w-fit rounded-xl border-none bg-center bg-fill px-32 py-20 shadow outline-none",
        "[&_button]:hidden [&_figure]:w-120 [&_figure]:bg-background/80sa [&_figure]:backdrop-blur-2xl",
        "after:font-semibold after:text-foreground after:tracking-tight after:content-['upsher.']",
        className
      )}
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
      {...rest}
    />
  )
}

// Ios window shadow
// shadow-[0px_20px_76px_rgba(0,0,0,0.2)]
