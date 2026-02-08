import { type InferPageType, loader } from "fumadocs-core/source"
import { docs } from "@/.source"
import { ARTICLE_BASE_PATH } from "./constants"

export const source = loader({
  baseUrl: ARTICLE_BASE_PATH,
  source: docs.toFumadocsSource(),
})

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"]

  return {
    segments,
    url: `/og/${ARTICLE_BASE_PATH}/${segments.join("/")}`,
  }
}
