import { tv } from "@repo/utils"

/**
 * IMPORTANT:
 * - This style relies on the `data-focus-visible` attribute.
 * - It ONLY works with components that set `data-focus-visible`
 *   (e.g. react-aria-components).
 * - It DOES NOT work with plain HTML elements or React components
 *   that rely on `:focus` / `:focus-visible`.
 *
 * If you need focus styles for native elements, use a `:focus-visible`
 * or JS-driven solution instead.
 */
export const focusRing = tv({
  base: "outline-0 outline-ios-blue outline-offset-2 data-focus-visible:outline-3",
})
