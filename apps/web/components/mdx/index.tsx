import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import dynamic from "next/dynamic"

const FileName = dynamic(() =>
  import("@repo/ui/file-name").then((mod) => mod.FileName)
)
const Kbd = dynamic(() => import("@/components/kbd/kbd").then((mod) => mod.Kbd))

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Kbd,
    FileName,
  }
}
