import { cn } from "@repo/utils"
import { format } from "date-fns"
import Link from "next/link"
import { Heading } from "@/components/section-heading"
import { source } from "@/lib/source"

export default function Writings() {
  // biome-ignore format: preserve array layout
  // const writings = [
  //   { url: "/", data: { title: "Don't pick a niche", description: "My experience building a drawer component for React.", publishDate: "10-02-2025" } },
  //   { url: "/", data: { title: "Why sharing ideas is important?", description: "What it takes to craft great animations.", publishDate: "11-21-2025" } },
  //   { url: "/", data: { title: "Convex + Clerk setup", description: "On the importance of sharing your work.", publishDate: "12-31-2025" } },
  // ]

  const publishDate = new Date()
  const writings = source.getPages()

  return (
    <>
      <Heading className="mb-4">Writing</Heading>
      <ul>
        {writings.map((w) => (
          <li className="h-fit w-full" key={w.url}>
            <Link
              className={cn(
                "group/writing-link select-nono prose flex cursor-default items-center gap-4",
                "h-11 after:h-11",
                "after:-z-1 after:absolute after:inset-x-0 after:bg-fill-quaternary/70 after:opacity-0 after:content-[''] hover:after:opacity-100"
              )}
              href={w.url}
            >
              <span className="block flex-1 truncate group-hover/writing-link:text-ios-blue">
                {w.data.title}
              </span>
              <span className="hidden font-jetbrains-mono font-normal text-label-tertiary text-sm uppercase tracking-tight md:block">
                {format(publishDate, "MMM ''dd")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
