import { createHash } from "node:crypto"
import { format } from "date-fns"
import { ARTICLE_BASE_PATH } from "@/lib/constants"
import { source } from "@/lib/source"

const DATE_FORMAT = "MMM dd, yyyy"

export const dynamic = "force-static"

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs,
  }))
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params
  const article = source.getPage(slug)

  if (!article)
    return Response.json({ error: "Article not found" }, { status: 404 })

  const path = `${ARTICLE_BASE_PATH}/${slug.join("/")}`

  return Response.json({
    title: article.data.title,
    description: article.data.description,
    date: article.data.date,
    formattedDate: format(article.data.date, DATE_FORMAT),
    path,
    slug,
    hash: createHash("md5").update(article.path).digest("hex"),
    ogImage: `/og${path}/image.png`,
  })
}
