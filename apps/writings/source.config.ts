import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config"

export const docs = defineDocs({
  dir: "content/writings",
  docs: {
    schema: frontmatterSchema,
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
        dark: "catppuccin-mocha",
        light: "catppuccin-latte",
      },
    },
  },
})
