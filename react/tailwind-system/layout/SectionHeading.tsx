import { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

interface SectionHeadingProps {
  children: ReactNode
  subtitle?: string
  centered?: boolean
  className?: string
}

/**
 * A styled heading component for section titles with optional subtitle.
 *
 * @component
 * @description
 * SectionHeading provides consistent styling for section titles across your application:
 * - Large, bold heading with responsive font sizes
 * - Optional subtitle with complementary styling
 * - Optional centered text alignment
 * - Consistent bottom margin for spacing
 * - Dark mode support
 * - Automatic subtitle width constraint for readability
 *
 * @param {ReactNode} children - Main heading text (wrapped in h2)
 * @param {string} [subtitle] - Optional descriptive subtitle text
 * @param {boolean} [centered=false] - Center-align the heading and subtitle
 * @param {string} [className] - Additional CSS classes to merge
 *
 * @example
 * // Basic heading
 * <SectionHeading>
 *   Our Services
 * </SectionHeading>
 *
 * @example
 * // Centered heading with subtitle
 * <SectionHeading
 *   centered
 *   subtitle="We provide comprehensive solutions for your business needs"
 * >
 *   What We Offer
 * </SectionHeading>
 *
 * @example
 * // Left-aligned with subtitle
 * <SectionHeading subtitle="Meet the talented individuals behind our success">
 *   Our Team
 * </SectionHeading>
 *
 * @example
 * // Custom styling
 * <SectionHeading className="mb-8" centered>
 *   Featured Projects
 * </SectionHeading>
 */
export function SectionHeading({
  children,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4"
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
