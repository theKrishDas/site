import { notFound } from "next/navigation"
import { ImageResponse } from "next/og"
import { getPageImage, source } from "@/lib/source"

export const revalidate = false

export async function GET(
  _req: Request,
  { params }: RouteContext<"/og/w/[...slug]">
) {
  const { slug } = await params
  const page = source.getPage(slug.slice(0, -1))
  if (!page) notFound()

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "#171717",
        backgroundColor: "#fff",
        fontSize: 72,
        fontWeight: 900,
        padding: "10%",
      }}
    >
      {page.data.title}
    </div>
  )
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }))
}
