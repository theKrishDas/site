import { cn } from "@repo/utils"
import { format } from "date-fns"
import Link from "next/link"
import { Padding } from "@/components/padding"
import { source } from "@/lib/source"

export default function Page() {
  const writings = source.getPages()
  return (
    <>
      <div aria-hidden className="h-20 w-full" />

      <main className="w-full px-6">
        <Padding className="w-full md:w-md">
          <h1 className="text-balance font-instrument-serif font-normal text-[2.5rem] text-label-primary leading-none tracking-[0.005em]">
            Unpredictable writings.
          </h1>
        </Padding>

        <div aria-hidden className="size-12" />

        <Padding className="w-full md:w-md">
          <p className="font-jetbrains-mono text-label-tertiary text-sm">
            {"> 2025"}
          </p>
        </Padding>

        <div aria-hidden className="size-5" />

        <ul className="flex touch-none select-none flex-col">
          {writings.map((w) => (
            <Padding
              className="w-full md:w-md"
              key={w.url}
              // TODO add asChild prop here
              // asChild
            >
              <li>
                <Link
                  className={cn(
                    "group/link flex select-none items-center gap-2 leading-none",
                    "h-9.5 after:h-9.5",
                    "after:-z-1 after:absolute after:inset-x-0 after:bg-fill-quaternary/70 after:opacity-0 after:content-[''] hover:after:opacity-100"
                  )}
                  href={w.url}
                >
                  <p className="flex-1 truncate font-medium text-base text-label-primary/75 group-hover/link:text-ios-blue">
                    {w.data.title}
                  </p>

                  <div aria-hidden className="size-2" />

                  <p className="font-jetbrains-mono text-label-tertiary text-sm uppercase tracking-tighter">
                    {format("11-02-2002", "MMM dd")}
                  </p>
                </Link>
              </li>
            </Padding>
          ))}
        </ul>
      </main>
    </>
  )
}
