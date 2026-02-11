import NextImage, { type ImageProps } from "next/image"

export function Image({ title, alt, ...props }: ImageProps) {
  if (title) {
    return (
      <figure>
        <NextImage alt={alt} {...props} />
        <figcaption>{title}</figcaption>
      </figure>
    )
  }

  return <NextImage alt={alt} {...props} />
}

/**
 * Renders images without Next.js optimization. Use for GIFs or external URLs where optimization fails.
 * Only use when necessary — images will not be optimized, lazy-loaded, or resized.
 */
export function UnoptimizedImage({
  alt,
  src,
  ...props
}: React.ComponentProps<"img">) {
  // biome-ignore lint/performance/noImgElement: Intentionally bypasses Next.js Image optimization for GIFs and problematic external URLs
  return <img alt={alt} height="auto" src={src} width="100%" {...props} />
}
