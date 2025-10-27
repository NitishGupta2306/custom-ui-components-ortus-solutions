import { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

/**
 * A flexible card container component with glassmorphism and hover effects.
 *
 * @component
 * @description
 * Card component that provides a consistent container style with:
 * - Standard solid background or glassmorphism effect
 * - Optional hover animation (lift and shadow)
 * - Rounded corners and border styling
 * - Dark mode support
 * - Backdrop blur for glass variant
 *
 * @param {ReactNode} children - Card content
 * @param {string} [className] - Additional CSS classes to merge
 * @param {boolean} [hover=false] - Enable hover lift animation and enhanced shadow
 * @param {boolean} [glass=false] - Enable glassmorphism effect with transparency and backdrop blur
 *
 * @example
 * // Basic card
 * <Card>
 *   <h3>Title</h3>
 *   <p>Content goes here</p>
 * </Card>
 *
 * @example
 * // Card with hover effect
 * <Card hover>
 *   <p>Hover over me for animation</p>
 * </Card>
 *
 * @example
 * // Glassmorphism card with hover
 * <Card glass hover>
 *   <div>Beautiful glass effect</div>
 * </Card>
 *
 * @example
 * // Card with custom styling
 * <Card className="max-w-md mx-auto">
 *   <p>Centered card with max width</p>
 * </Card>
 */
export function Card({ children, className, hover = false, glass = false }: CardProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-lg border',
        glass
          ? 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 dark:border-slate-700/50 shadow-xl'
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700',
        hover && 'transition-[transform,box-shadow] duration-300 hover:shadow-2xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
