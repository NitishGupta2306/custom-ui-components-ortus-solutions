import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * Combines clsx for conditional classes with tailwind-merge for conflict handling
 *
 * @param inputs - Class names to merge (strings, objects, arrays, conditionals)
 * @returns Combined and deduplicated class name string
 *
 * @example
 * ```tsx
 * // Basic usage
 * cn('px-4 py-2', 'bg-blue-500')
 * // => 'px-4 py-2 bg-blue-500'
 *
 * // Conditional classes
 * cn('base-class', isActive && 'active-class')
 * // => 'base-class active-class' (if isActive is true)
 *
 * // Tailwind conflicts (last one wins)
 * cn('px-4', 'px-6')
 * // => 'px-6'
 *
 * // Object syntax
 * cn({ 'text-red-500': hasError, 'text-green-500': !hasError })
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
