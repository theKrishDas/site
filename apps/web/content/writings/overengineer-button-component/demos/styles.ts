import { cn } from "@repo/utils"

/**
 * Deprecated: Exported as `baseClasses` for backward compatibility. Use `buttonClasses()` instead.
 */
const legacyClasses = Object.freeze([
  // "rounded-full font-medium",
  // "text-xl md:size-12 md:text-base",
  "relative inline-flex h-10 items-center gap-1.25 rounded-full px-3.5 font-medium text-[0.9rem] md:h-8 md:px-3",
  "bg-gray-1/(--fill-tertiary-opacity) text-label-primary",
] as const)

const preflight =
  "shrink-0 whitespace-nowrap disabled:pointer-events-none [&_svg]:shrink-0"
const baseClasses = [
  "relative inline-flex h-10 w-fit items-center gap-1.25 rounded-full bg-(--button-bg-idle) px-3.5 font-medium text-(--button-text) text-[0.9rem] leading-none md:h-8 md:px-3",
  // "[--button-bg-idle:var(--fill-tertiary)] [--button-bg-pressed:var(--fill-primary)] [--button-bg-hover:var(--fill-secondary)]",
  // "[--button-bg-hover:var(--fill-primary)] [--button-bg-idle:var(--fill-tertiary)] [--button-bg-pressed:var(--color-gray-3)]",
  "[--button-bg-hover:var(--fill-primary)] [--button-bg-idle:var(--fill-tertiary)] [--button-bg-pressed:var(--fill-quaternary)] dark:[--button-bg-pressed:var(--color-gray-4)]",
  "[--button-text-pressed:var(--color-label-primary)] [--button-text:var(--color-label-primary)]/87 dark:[--button-text:var(--color-label-primary)]/80",
]

const patches = {
  // Adds smooth hover and press interactions with scale animation
  "default-interactions":
    "transition-all hover:bg-(--button-bg-hover) active:scale-97 active:bg-(--button-bg-pressed) active:text-(--button-text-pressed)",
  "rac-interactions":
    "transition-all data-pressed:scale-97 data-hovered:bg-(--button-bg-hover) data-pressed:bg-(--button-bg-pressed) data-pressed:text-(--button-text-pressed)",
  "strong-colors":
    "[--button-bg-hover:var(--color-ios-orange)]! [--button-bg-pressed:var(--color-ios-red)]!",
  // Adds focus ring for keyboard navigation accessibility
  "rac-a11y-focus":
    "outline-0 data-focus-visible:ring-3 data-focus-visible:ring-ios-blue",
} as const

export type Patch = keyof typeof patches

/**
 * Generates button className string with base styles and optional patches.
 *
 * @param patchList - Array of patch names to apply (e.g., `["rac-hover-press", "rac-a11y-focus"]`)
 * @param overrides - Optional additional classes to merge (useful for one-off customizations)
 * @returns Merged className string ready for use in component className prop
 *
 * @example
 * ```tsx
 * // Basic button with no patches
 * <button className={buttonClasses()} />
 *
 * // Button with hover/press interactions
 * <button className={buttonClasses(["rac-interactions"])} />
 *
 * // Button with patches and custom override
 * <button className={buttonClasses(["rac-interactions", "rac-a11y-focus"], "select-none")} />
 * ```
 */
export function buttonClasses(
  patchList: Patch[] = [],
  overrides?: string | string[]
) {
  return cn(
    preflight,
    baseClasses,
    patchList.map((p) => patches[p]),
    overrides
  )
}

export { legacyClasses as baseClasses }
