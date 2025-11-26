import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config"
import { z } from "zod"

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
  },
  meta: {
    schema: metaSchema,
  },
})

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        // visit https://shiki.style/themes
        dark: "github-dark",
        light: "github-light",
      },
    },
  },
})
