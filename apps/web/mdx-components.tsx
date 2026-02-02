import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { Kbd } from "@/components/kbd/kbd"
import { Image } from "@/components/mdx/image"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Kbd,
    img: Image,
  }
}
