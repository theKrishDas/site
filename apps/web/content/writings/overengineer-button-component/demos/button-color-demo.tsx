"use client"

import {
  ColorSwatchPicker,
  ColorSwatchPickerItem,
} from "@repo/ui/color-swatch-picker"
import { cn } from "@repo/utils"
import { useState } from "react"
import { parseColor } from "react-aria-components"
import { LuMousePointerClick } from "react-icons/lu"
import { CodeBlock } from "@/components/experimental/codeblock"
import { AnimatedRacButton as AnimatedButton } from "./animated-button"
import { buttonClasses } from "./styles"

const colors = [
  { name: "blue", hex: "#0088FF" },
  { name: "red", hex: "#FF383C" },
  { name: "orange", hex: "#FF8D28" },
  { name: "purple", hex: "#6155F5" },
] as const

export function ButtonColorDemo() {
  const [value, setValue] = useState(parseColor(colors[0].hex))
  const hslColor = value.toFormat("hsl")
  const [, , lightnessChannel] = hslColor.getColorChannels()
  const brighterHex = hslColor
    .withChannelValue(
      lightnessChannel,
      hslColor.getChannelValue(lightnessChannel) + 10
    )
    .toString("hex")

  const Button = () => (
    <AnimatedButton
      className={buttonClasses(
        ["rac-interactions", "rac-a11y-focus"],
        "text-white/85"
      )}
      style={
        {
          "--button-bg-pressed": brighterHex,
          "--button-bg-hover": value,
          "--button-bg-idle": value,
        } as React.CSSProperties
      }
    >
      <LuMousePointerClick className="-ml-px" size={17} /> Press{" "}
    </AnimatedButton>
  )

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center">
      <div
        className={cn(
          "corner-squircle mt-8 mb-12 grid h-48 w-[90%] place-content-center rounded-3xl shadow-elevation-medium",
          "bg-white dark:bg-neutral-950",
          "border border-gray-6/50 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-black/2.5 dark:border-transparent dark:shadow-white/2.5"
        )}
      >
        <Button />
      </div>
      <ColorSwatchPicker
        aria-label="button-color"
        className="p-4"
        onChange={setValue}
        value={value}
      >
        {colors.map((color) => (
          <ColorSwatchPickerItem color={color.hex} key={color.hex} />
        ))}
      </ColorSwatchPicker>

      <div className="w-full border-t">
        <CodeBlock
          className="rounded-none border-none"
          hideLineNumbers
          language="ts"
        >
          {`<Button className="[--button-highlight:${brighterHex}] [--button-background:${value.toString("hex")}]" />`}
        </CodeBlock>
      </div>
    </div>
  )
}
