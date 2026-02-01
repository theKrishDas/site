import { tv, type VariantProps } from "tailwind-variants"
import { focusRing } from "@/styles/focus-ring"

export const buttonVariants = tv({
  extend: focusRing,
  base: [
    "tap-highlight-none box-border shrink-0 cursor-default whitespace-nowrap disabled:pointer-events-none [&_svg]:shrink-0",
    "relative inline-flex w-fit items-center justify-center gap-1.25 rounded-full border border-transparent bg-(--button-bg) font-medium text-[0.885rem] leading-none",
  ],
  variants: {
    variant: {
      filled: "",
      ghost: "",
    },
    size: {
      default: "h-10 px-3.5 md:h-8 md:px-3",
      icon: "size-10 md:size-8 [&>svg]:text-lg md:[&>svg]:text-base",
      "icon-sm": "size-8 md:size-6 [&>svg]:text-sm",
    },
    color: {
      gray: [
        "[--button-bg-hovered:var(--fill-primary)] [--button-bg-pressed:var(--fill-quaternary)] [--button-bg:var(--fill-tertiary)] dark:[--button-bg-pressed:var(--color-gray-4)]",
        "text-label-primary/87 data-hovered:text-label-primary data-pressed:text-label-primary dark:text-label-primary/80",
      ],
    },
    stateStyles: {
      true: "data-hovered:bg-(--button-bg-hovered) data-pressed:bg-(--button-bg-pressed)",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "ghost",
      class: "[--button-bg:var(--fill-opaque)]",
    },
  ],
  defaultVariants: {
    size: "default",
    color: "gray",
    stateStyles: true,
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
