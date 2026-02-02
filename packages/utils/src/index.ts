import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @deprecated
 * WARNING: This helper is scheduled for removal.
 *
 * Do NOT use this function in new code.
 * Import `cn` directly from `tailwind-variants` instead.
 *
 * This wrapper exists only for backward compatibility and will be deleted.
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
