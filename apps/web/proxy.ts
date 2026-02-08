import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { ARTICLE_BASE_PATH } from "./lib/constants"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const ARTICLE_META_SUFFIX = ".meta"

  if (
    pathname.startsWith(ARTICLE_BASE_PATH) &&
    pathname.endsWith(ARTICLE_META_SUFFIX)
  ) {
    // Remove .meta extension and article base path
    const articlePath = pathname.slice(0, ARTICLE_META_SUFFIX.length * -1)
    const slug = articlePath
      .replace(ARTICLE_BASE_PATH, "")
      .split("/")
      .filter(Boolean)

    // Redirect to meta page with slug as path segments
    const url = request.nextUrl.clone()
    url.pathname = `/meta/${slug.join("/")}`

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/w/:path*", // Only run on /w routes
  ],
}
