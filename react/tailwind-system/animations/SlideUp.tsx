import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SlideUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

/**
 * A slide-up animation wrapper with fade effect using Framer Motion.
 *
 * @component
 * @description
 * SlideUp component that animates elements from below with a fade effect:
 * - Slides from Y-offset to original position
 * - Simultaneously fades from 0 to 1 opacity
 * - Triggers when element enters viewport
 * - EaseOut timing for natural deceleration
 * - Configurable distance, delay, and duration
 * - Animates only once per page load
 *
 * @param {ReactNode} children - Content to animate
 * @param {number} [delay=0] - Delay before animation starts (in seconds)
 * @param {number} [duration=0.6] - Animation duration (in seconds)
 * @param {number} [distance=30] - Vertical distance to slide (in pixels)
 * @param {string} [className] - Additional CSS classes for the wrapper
 *
 * @example
 * // Basic slide-up animation
 * <SlideUp>
 *   <Card>Content slides up into view</Card>
 * </SlideUp>
 *
 * @example
 * // Larger distance for more dramatic effect
 * <SlideUp distance={60}>
 *   <h1>Big entrance</h1>
 * </SlideUp>
 *
 * @example
 * // Staggered cards
 * <div className="grid grid-cols-3 gap-4">
 *   {cards.map((card, i) => (
 *     <SlideUp key={card.id} delay={i * 0.1}>
 *       <Card {...card} />
 *     </SlideUp>
 *   ))}
 * </div>
 *
 * @example
 * // Slower, longer slide
 * <SlideUp duration={1} distance={50}>
 *   <Hero />
 * </SlideUp>
 */
export function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 30,
  className,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
