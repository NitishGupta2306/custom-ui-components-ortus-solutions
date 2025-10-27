import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

/**
 * An animated counter that counts up from 0 to a target number when scrolled into view.
 *
 * @component
 * @description
 * AnimatedCounter provides a smooth counting animation using:
 * - Intersection Observer API for viewport detection
 * - RequestAnimationFrame for smooth 60fps animation
 * - Easing function (easeOutQuad) for natural deceleration
 * - One-time animation per component instance
 * - Optional suffix for units (%, +, K, etc.)
 *
 * Perfect for statistics, metrics, and achievement displays.
 *
 * @param {number} end - Target number to count up to
 * @param {number} [duration=2000] - Animation duration in milliseconds
 * @param {string} [suffix=''] - Text to append after the number (e.g., '%', '+', 'K')
 * @param {string} [className=''] - Additional CSS classes for the span element
 *
 * @example
 * // Basic counter
 * <AnimatedCounter end={150} />
 *
 * @example
 * // Counter with suffix
 * <AnimatedCounter end={99} suffix="%" />
 *
 * @example
 * // Styled counter with faster animation
 * <AnimatedCounter
 *   end={1000}
 *   suffix="+"
 *   duration={1500}
 *   className="text-4xl font-bold text-accent"
 * />
 *
 * @example
 * // Statistics display
 * <div className="grid grid-cols-3 gap-8">
 *   <div>
 *     <AnimatedCounter end={50} suffix="+" className="text-5xl font-bold" />
 *     <p>Projects Completed</p>
 *   </div>
 *   <div>
 *     <AnimatedCounter end={98} suffix="%" className="text-5xl font-bold" />
 *     <p>Client Satisfaction</p>
 *   </div>
 *   <div>
 *     <AnimatedCounter end={15} suffix="K" className="text-5xl font-bold" />
 *     <p>Lines of Code</p>
 *   </div>
 * </div>
 */
export function AnimatedCounter({ end, duration = 2000, suffix = '', className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!counterRef.current || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounter()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(counterRef.current)

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounter = (): void => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCounter = (): void => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuad = (t: number): number => t * (2 - t)
      const easedProgress = easeOutQuad(progress)

      const currentCount = Math.floor(easedProgress * end)
      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  return (
    <span ref={counterRef} className={className}>
      {count}{suffix}
    </span>
  )
}
