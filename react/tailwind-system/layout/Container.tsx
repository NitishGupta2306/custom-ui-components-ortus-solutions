import { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * A responsive container component with multiple max-width presets.
 *
 * @component
 * @description
 * Container component that provides centered content with responsive padding and max-width:
 * - sm: 768px - Ideal for text-heavy content
 * - md: 1024px - Good for forms and smaller layouts
 * - lg: 1280px - Default, suitable for most page sections
 * - xl: 1536px - Wide layouts for dashboards and data displays
 * - Responsive horizontal padding (increases on larger screens)
 * - Automatic horizontal centering
 *
 * @param {ReactNode} children - Container content
 * @param {string} [className] - Additional CSS classes to merge
 * @param {('sm'|'md'|'lg'|'xl')} [size='lg'] - Maximum width preset
 *
 * @example
 * // Default large container
 * <Container>
 *   <h1>Page Title</h1>
 *   <p>Content with 1280px max width</p>
 * </Container>
 *
 * @example
 * // Small container for text content
 * <Container size="sm">
 *   <article>
 *     <p>Narrower container optimized for reading</p>
 *   </article>
 * </Container>
 *
 * @example
 * // Extra large for wide layouts
 * <Container size="xl">
 *   <div className="grid grid-cols-4 gap-6">
 *     {/* Dashboard widgets */}
 *   </div>
 * </Container>
 *
 * @example
 * // Container with custom spacing
 * <Container className="py-12">
 *   <p>Container with vertical padding</p>
 * </Container>
 */
export function Container({ children, className, size = 'lg' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl', // 768px - For text content
    md: 'max-w-5xl', // 1024px
    lg: 'max-w-7xl', // 1280px - Default
    xl: 'max-w-screen-2xl', // 1536px - Wide sections
  }

  return <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}>{children}</div>
}
