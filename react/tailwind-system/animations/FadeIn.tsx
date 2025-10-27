import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

/**
 * A fade-in animation wrapper using Framer Motion's viewport detection.
 *
 * @component
 * @description
 * FadeIn component that animates opacity from 0 to 1 when scrolling into view:
 * - Triggers when element enters viewport
 * - Animates only once (viewport.once: true)
 * - 50px margin for earlier trigger
 * - Configurable delay and duration
 * - Useful for staggered entry animations
 *
 * Uses Framer Motion's viewport intersection observer for performance.
 *
 * @param {ReactNode} children - Content to animate
 * @param {number} [delay=0] - Delay before animation starts (in seconds)
 * @param {number} [duration=0.6] - Animation duration (in seconds)
 * @param {string} [className] - Additional CSS classes for the wrapper
 *
 * @example
 * // Basic fade-in
 * <FadeIn>
 *   <h1>Welcome</h1>
 * </FadeIn>
 *
 * @example
 * // Fade-in with delay for staggered effect
 * <FadeIn delay={0.2}>
 *   <p>This appears 0.2s after entering viewport</p>
 * </FadeIn>
 *
 * @example
 * // Slower fade-in animation
 * <FadeIn duration={1.2}>
 *   <div>Slow, dramatic entrance</div>
 * </FadeIn>
 *
 * @example
 * // Staggered list items
 * {items.map((item, index) => (
 *   <FadeIn key={item.id} delay={index * 0.1}>
 *     <ListItem item={item} />
 *   </FadeIn>
 * ))}
 */
export function FadeIn({ children, delay = 0, duration = 0.6, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
