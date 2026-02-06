import { cn } from "@repo/utils"
import { Bleed } from "@/components/bleed"

/**
 * Renders a live component example with optional source code below it.
 */
function Example({
  children,
  demo,
}: {
  children?: React.ReactNode
  demo: React.ReactNode
}) {
  return (
    <Bleed
      className={cn(
        // TODO: Create a component for this!
        "corner-squircle my-4 flex h-fit flex-col overflow-hidden rounded-2xl border border-(--border-color) bg-(--fill-color)",
        "[&_figure.shiki]:my-0 [&_figure.shiki]:rounded-none [&_figure.shiki]:border-none [&_figure.shiki]:bg-(--fill-color)",
        "[&_div]:nth-2:my-0 [&_div]:nth-2:rounded-none [&_div]:nth-2:border-none",
        "[--border-color:var(--color-gray-200)]/60 dark:[--border-color:var(--color-gray-6)]/80",
        "[--fill-color:white] dark:[--fill-color:var(--color-neutral-950)]"
      )}
    >
      <div className="flex min-h-36 w-full items-center justify-center border-(--border-color) border-b bg-background">
        {demo}
      </div>

      {children}
    </Bleed>
  )
}

export { Example }
