import { cn } from "@repo/utils"
import { createRelativeLink } from "fumadocs-ui/mdx"
import { DocsTitle } from "fumadocs-ui/page"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { source } from "@/lib/source"
import { getMDXComponents } from "@/mdx-components"

export default async function Page(props: PageProps<"/w/[[...slug]]">) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <article className="mx-auto w-full px-4 md:max-w-160 md:px-0">
      <DocsTitle
        className={cn(
          // "-tracking-[0.005em] mb-4.5 text-balance font-instrument-serif font-normal text-[3.25rem] leading-none md:text-[5.5rem]",
          // "text-[3rem] leading-none md:text-[5rem]",
          // "font-bold font-inter text-3xl",
          // "mb-3 font-medium text-3xl text-charcoal-100 sm:mb-4 sm:text-4xl lg:text-5xl"
          // "text-[3.25rem] leading-none md:text-[5rem]",
          "text-balance font-semibold text-[1.5rem] tracking-[-0.01em]"
        )}
      >
        {page.data.title}
      </DocsTitle>

      <Meta />

      <div className="h-15" />
      <div className="prose flex-1">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </div>
    </article>
  )

  // for custom toc component follow this link
  // https://fumadocs.dev/docs/headless/components/toc
  // wrap the <DocsPage /> or the layout in this toc component
  // return (
  //   <DocsPage full={page.data.full} tableOfContent={{ enabled: false }}>
  //     {/* TODO: Add a component for this */}
  //     <div aria-hidden className="size-16 md:size-22 lg:size-26" />
  //     <DocsTitle className="-tracking-[0.005em] text-balance font-instrument-serif font-normal text-[3.25rem] leading-[1.1] md:text-[5.5rem]">
  //       {page.data.title}
  //     </DocsTitle>
  //     <DocsDescription>{page.data.description}</DocsDescription>
  //     <InlineTOC items={page.data.toc} />
  //     <DocsBody>
  //       <MDX
  //         components={getMDXComponents({
  //           a: createRelativeLink(source, page),
  //         })}
  //       />
  //     </DocsBody>
  //   </DocsPage>
  // )
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
  }
}

function Meta() {
  const publishDate = "oct 29, 2024"
  return (
    <div className="mt-5.5 flex items-center gap-5 font-jetbrains-mono font-normal text-label-tertiary text-sm uppercase tracking-tight">
      <p>{publishDate}</p>
    </div>
  )
}
