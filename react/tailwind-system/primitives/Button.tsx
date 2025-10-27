import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

/**
 * A versatile button component with multiple variants, sizes, and loading state support.
 *
 * @component
 * @description
 * Button component built with Tailwind CSS that provides:
 * - Three style variants: primary (accent color), secondary (neutral), and outline
 * - Three size options: sm, md, lg
 * - Built-in loading state with spinner animation
 * - Full accessibility support with focus rings
 * - Disabled state handling
 * - Dark mode support
 *
 * @param {ReactNode} children - Button content (text, icons, etc.)
 * @param {('primary'|'secondary'|'outline')} [variant='primary'] - Visual style variant
 * @param {('sm'|'md'|'lg')} [size='md'] - Button size
 * @param {boolean} [isLoading=false] - Shows loading spinner and disables interaction
 * @param {string} [className] - Additional CSS classes to merge
 *
 * @example
 * // Primary button (default)
 * <Button onClick={handleClick}>
 *   Submit
 * </Button>
 *
 * @example
 * // Secondary variant with small size
 * <Button variant="secondary" size="sm">
 *   Cancel
 * </Button>
 *
 * @example
 * // Outline variant with loading state
 * <Button variant="outline" isLoading={submitting}>
 *   Save Changes
 * </Button>
 *
 * @example
 * // Large button with custom classes
 * <Button size="lg" className="w-full">
 *   Get Started
 * </Button>
 *
 * @example
 * // Disabled button
 * <Button disabled>
 *   Unavailable
 * </Button>
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-[background-color,border-color,box-shadow,transform,opacity] duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent
  `

  const variants = {
    primary: 'bg-accent hover:bg-accent-dark text-white shadow-md hover:shadow-lg',
    secondary:
      'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100',
    outline:
      'border-2 border-accent text-accent hover:bg-accent hover:text-white dark:border-accent-light dark:text-accent-light',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  )
}
