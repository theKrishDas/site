import { createHash } from "node:crypto"
import fs from "node:fs"
import path from "node:path"
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

  // Generate hash from page title
  const hash = createHash("md5").update(page.path).digest("hex")
  const imagePath = path.join(
    process.cwd(),
    "public",
    "static",
    "og",
    `${hash}.png`
  )

  try {
    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath)

      console.info(
        `[OG] Served static image for "${page.data.title}" (${page.path})`
      )
      return new Response(imageBuffer, {
        headers: { "Content-Type": "image/png" },
      })
    }

    console.info(
      `[OG] Static image not found for "${page.data.title}" (${page.path}), generating dynamic image`
    )
  } catch (error) {
    console.error(
      `[OG] Error reading image for "${page.data.title}" (${page.path}):`,
      error
    )
  }

  // Fallback to ImageResponse
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
