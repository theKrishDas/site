import { type InferPageType, loader } from "fumadocs-core/source"
import { docs } from "@/.source"

export const source = loader({
  baseUrl: "/w",
  source: docs.toFumadocsSource(),
})

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"]

  return {
    segments,
    url: `/og/w/${segments.join("/")}`,
  }
}
