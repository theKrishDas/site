"use client"

import {
  ColorSwatch as AriaColorSwatch,
  type ColorSwatchProps as RacColorSwatchProps,
} from "react-aria-components"

export interface ColorSwatchProps extends RacColorSwatchProps {
  showActive?: boolean
}

export function ColorSwatch({
  showActive,
  className,
  ...rest
}: ColorSwatchProps) {
  return (
    <AriaColorSwatch
      {...rest}
      className={`--ui-color-swatch ui:relative ui:box-border ui:size-10 ui:rounded-full ui:ring-1 ui:ring-white/40 ui:ring-inset ui:md:size-8 ${showActive ? "ui:after:-translate-y-1/2 ui:after:-translate-x-1/2 ui:ring-2 ui:after:pointer-events-none ui:after:absolute ui:after:top-1/2 ui:after:left-1/2 ui:after:size-3 ui:after:rounded-full ui:after:bg-white/80 ui:after:mix-blend-plus-lighter ui:after:content-['']" : ""} ${className}`}
      data-color={rest.color}
      style={({ color }) => ({
        background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
        ...rest.style,
      })}
    />
  )
}
