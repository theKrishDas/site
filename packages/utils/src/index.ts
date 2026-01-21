import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// biome-ignore lint/performance/noBarrelFile: Re-export from "tailwind-variants"
export { cnMerge, tv } from "tailwind-variants"

/**
 * Combines class names using clsx and merges Tailwind CSS classes using tailwind-merge
 * @param inputs - Class values to combine
 * @returns Combined and merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Creates a promise that resolves after a specified number of milliseconds
 * @param milliseconds - The number of milliseconds to wait
 * @returns A promise that resolves after the specified time
 */
export function wait(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}

/**
 * Forces TypeScript to resolve types to a flat object structure
 * @template T - The type to prettify
 */
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}
