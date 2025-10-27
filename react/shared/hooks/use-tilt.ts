import { useEffect, RefObject } from 'react'

interface TiltOptions {
  /** Maximum tilt rotation in degrees (default: 15) */
  max?: number
  /** Scale factor on hover (default: 1.05) */
  scale?: number
  /** Transition speed in milliseconds (default: 300) */
  speed?: number
  /** Enable glare effect using CSS variables (default: true) */
  glare?: boolean
}

/**
 * Hook to add 3D tilt effect to an element based on mouse position
 * Automatically respects prefers-reduced-motion for accessibility
 *
 * @param ref - React ref to the target element
 * @param options - Tilt configuration options
 *
 * @example
 * ```tsx
 * import { useRef } from 'react'
 * import { useTilt } from '@/hooks/use-tilt'
 *
 * function Card() {
 *   const cardRef = useRef<HTMLDivElement>(null)
 *   useTilt(cardRef, { max: 20, scale: 1.1 })
 *
 *   return (
 *     <div ref={cardRef} className="card">
 *       Content with 3D tilt effect
 *     </div>
 *   )
 * }
 * ```
 *
 * @remarks
 * - Automatically disables for users with prefers-reduced-motion
 * - Uses CSS custom properties --glare-x and --glare-y for glare effect
 * - Cleans up event listeners on unmount
 */
export function useTilt(ref: RefObject<HTMLElement>, options: TiltOptions = {}) {
  const { max = 15, scale = 1.05, speed = 300, glare = true } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Calculate rotation values
      const rotateX = ((y - centerY) / centerY) * -max
      const rotateY = ((x - centerX) / centerX) * max

      // Apply transform
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`

      // Apply glare effect using CSS custom properties
      if (glare) {
        const glareX = (x / rect.width) * 100
        const glareY = (y / rect.height) * 100
        element.style.setProperty('--glare-x', `${glareX}%`)
        element.style.setProperty('--glare-y', `${glareY}%`)
      }
    }

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
      if (glare) {
        element.style.setProperty('--glare-x', '50%')
        element.style.setProperty('--glare-y', '50%')
      }
    }

    // Set transition
    element.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref, max, scale, speed, glare])
}
