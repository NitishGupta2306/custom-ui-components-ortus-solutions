import { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'subtle' | 'dark'
}

/**
 * A semantic section wrapper with consistent vertical spacing and background variants.
 *
 * @component
 * @description
 * Section component that provides:
 * - Semantic HTML5 <section> element
 * - Responsive vertical padding (smaller on mobile, larger on desktop)
 * - Three background color variants with dark mode support
 * - Optional ID for navigation/anchor links
 *
 * Background variants:
 * - white: Pure white (light) / slate-900 (dark)
 * - subtle: Light gray (light) / slate-800 (dark)
 * - dark: Darker gray (light) / slate-950 (dark)
 *
 * @param {string} [id] - Section ID for navigation anchors
 * @param {ReactNode} children - Section content
 * @param {string} [className] - Additional CSS classes to merge
 * @param {('white'|'subtle'|'dark')} [background='white'] - Background color variant
 *
 * @example
 * // Basic section with anchor
 * <Section id="about">
 *   <Container>
 *     <h2>About Us</h2>
 *     <p>Content here</p>
 *   </Container>
 * </Section>
 *
 * @example
 * // Section with subtle background
 * <Section background="subtle">
 *   <Container>
 *     <p>Slightly contrasted background</p>
 *   </Container>
 * </Section>
 *
 * @example
 * // Dark background section for visual separation
 * <Section background="dark" className="text-center">
 *   <Container>
 *     <h2>Featured Content</h2>
 *   </Container>
 * </Section>
 */
export function Section({ id, children, className, background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white dark:bg-slate-900',
    subtle: 'bg-slate-50 dark:bg-slate-800',
    dark: 'bg-slate-100 dark:bg-slate-950',
  }

  return (
    <section id={id} className={cn('py-16 md:py-24', backgrounds[background], className)}>
      {children}
    </section>
  )
}
