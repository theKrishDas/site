import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config"
import { remarkUnravelMdx } from "remark-unravel-mdx"
import { z } from "zod"
import { shikiOptions } from "./lib/shiki"

export const docs = defineDocs({
  dir: "content/writings",
  docs: {
    schema: frontmatterSchema.extend({
      index: z.boolean().default(false),
      date: z.string().transform((s) => new Date(s)),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
    files: [
      "**/*.mdx", // only include `.mdx` files
      "!**/_*", // Exclude files starting with _
      "!**/_*/**", // Exclude directories starting with _
      "!**/.*", // Exclude hidden files (starting with .)
      "!**/.*/***", // Exclude hidden directories
      "!**/*.draft.mdx", // Exclude draft files
      "!**/*.test.mdx", // Exclude test files
      "!**/*.ignore.mdx", // Exclude files with .ignore
    ],
  },
  meta: {
    schema: metaSchema,
  },
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkUnravelMdx],
    rehypeCodeOptions: {
      inline: "tailing-curly-colon",
      ...shikiOptions,
    },
  },
})
