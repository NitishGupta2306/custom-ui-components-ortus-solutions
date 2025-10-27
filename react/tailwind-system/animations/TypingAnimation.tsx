import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

/**
 * A typewriter effect animation that cycles through multiple text strings.
 *
 * @component
 * @description
 * TypingAnimation creates a realistic typewriter effect that:
 * - Types out text character by character
 * - Pauses when complete
 * - Deletes text character by character
 * - Cycles through multiple strings infinitely
 * - Displays an animated cursor (pulsing pipe)
 *
 * Perfect for hero sections, dynamic headlines, and showcasing multiple concepts.
 *
 * @param {string[]} texts - Array of strings to cycle through
 * @param {number} [typingSpeed=100] - Milliseconds per character when typing
 * @param {number} [deletingSpeed=50] - Milliseconds per character when deleting
 * @param {number} [pauseDuration=2000] - Milliseconds to pause when text is complete
 * @param {string} [className=''] - Additional CSS classes for the span wrapper
 *
 * @example
 * // Basic typing animation
 * <TypingAnimation texts={['Developer', 'Designer', 'Creator']} />
 *
 * @example
 * // Slower typing with longer pause
 * <TypingAnimation
 *   texts={['Full Stack Developer', 'UI/UX Designer', 'Tech Enthusiast']}
 *   typingSpeed={150}
 *   pauseDuration={3000}
 * />
 *
 * @example
 * // Hero section usage
 * <div className="text-center">
 *   <h1 className="text-5xl font-bold mb-4">
 *     Hi, I'm a{' '}
 *     <TypingAnimation
 *       texts={[
 *         'Software Engineer',
 *         'Problem Solver',
 *         'Coffee Enthusiast'
 *       ]}
 *       className="text-accent"
 *     />
 *   </h1>
 * </div>
 *
 * @example
 * // Fast-paced animation
 * <TypingAnimation
 *   texts={['React', 'Vue', 'Angular', 'Svelte']}
 *   typingSpeed={80}
 *   deletingSpeed={40}
 *   pauseDuration={1500}
 *   className="font-mono text-green-500"
 * />
 */
export function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = ''
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]

    // If paused, wait before starting to delete
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    // Handle typing
    if (!isDeleting && currentText !== currentFullText) {
      const timeout = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }

    // Pause when full text is typed
    if (!isDeleting && currentText === currentFullText) {
      setIsPaused(true)
      return
    }

    // Handle deleting
    if (isDeleting && currentText !== '') {
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1))
      }, deletingSpeed)
      return () => clearTimeout(timeout)
    }

    // Move to next text when deletion is complete
    if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
