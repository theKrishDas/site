import { cn } from "@repo/utils"
import { format } from "date-fns"
import { createRelativeLink } from "fumadocs-ui/mdx"
import { DocsTitle } from "fumadocs-ui/page"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Container } from "@/components/container"
import { Spacer } from "@/components/spacer"
import { getPageImage, source } from "@/lib/source"
import { getMDXComponents } from "@/mdx-components"

export default async function Page(props: PageProps<"/w/[[...slug]]">) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <Container asChild>
      <article>
        <DocsTitle
          className={cn(
            // "-tracking-[0.005em] mb-4.5 text-balance font-instrument-serif font-normal text-[3.25rem] leading-none md:text-[5.5rem]",
            // "text-[3rem] leading-none md:text-[5rem]",
            // "font-bold font-inter text-3xl",
            // "mb-3 font-medium text-3xl text-charcoal-100 sm:mb-4 sm:text-4xl lg:text-5xl"
            // "text-[3.25rem] leading-none md:text-[5rem]",
            "text-balance font-semibold text-[1.5rem] capitalize tracking-[-0.0125em]"
          )}
        >
          {page.data.title}
        </DocsTitle>

        <div className="mt-5.5 flex items-center gap-5 font-jetbrains-mono font-normal text-label-tertiary text-sm uppercase tracking-tight">
          <p>{format(page.data.date, "MMM dd, yyyy")}</p>
        </div>

        {/* Use margin instead of height so that the space overlaps */}
        <Spacer className="mb-15 h-0" />

        <div className="prose flex-1">
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(source, page),
            })}
          />
        </div>
      </article>
    </Container>
  )
}

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(
  props: PageProps<"/w/[[...slug]]">
): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  }
}
