"use client"

import {
  ColorSwatchPicker as AriaColorSwatchPicker,
  ColorSwatchPickerItem as AriaColorSwatchPickerItem,
  composeRenderProps,
  type ColorSwatchPickerItemProps as RacColorSwatchPickerItemProps,
  type ColorSwatchPickerProps as RacColorSwatchPickerProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { ColorSwatch } from "./color-swatch"

const pickerStyles = tv({
  base: "--ui-color-swatch-picker ui:flex ui:w-fit ui:gap-1",
  variants: {
    layout: {
      stack: "ui:flex-col",
      grid: "ui:flex-wrap",
    },
  },
})

export type ColorSwatchPickerProps = Omit<RacColorSwatchPickerProps, "layout">
export function ColorSwatchPicker({
  children,
  ...props
}: ColorSwatchPickerProps) {
  return (
    <AriaColorSwatchPicker
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        pickerStyles({ ...renderProps, className })
      )}
    >
      {children}
    </AriaColorSwatchPicker>
  )
}

export type ColorSwatchPickerItemProps = RacColorSwatchPickerItemProps
export function ColorSwatchPickerItem({
  className,
  ...rest
}: ColorSwatchPickerItemProps) {
  return (
    <AriaColorSwatchPickerItem
      {...rest}
      className={`--ui-color-swatch-picker-item ui:tap-highlight-none ui:rounded-full ui:outline-none ui:ring-ios-blue ui:data-focus-visible:ring-3 ${className}`}
    >
      {({ isSelected }) => (
        <>
          <ColorSwatch showActive={isSelected} />
        </>
      )}
    </AriaColorSwatchPickerItem>
  )
}
