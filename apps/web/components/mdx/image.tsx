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
