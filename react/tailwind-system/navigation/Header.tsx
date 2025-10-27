import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

/**
 * A responsive header navigation component with mobile menu and theme toggle.
 *
 * @component
 * @description
 * Header provides a fixed top navigation bar with:
 * - Sticky positioning with scroll-based backdrop blur
 * - Desktop horizontal navigation
 * - Mobile slide-out menu with overlay
 * - Keyboard navigation support (Escape, Tab trap)
 * - Skip-to-content link for accessibility
 * - Smooth scroll to sections
 * - Theme toggle integration
 * - Focus management for mobile menu
 *
 * Note: This component requires external constants and utilities.
 * You'll need to provide:
 * - Button component
 * - ThemeToggle component
 * - Navigation items (NAV_ITEMS)
 * - Site name (SITE_NAME)
 * - Scroll utility function
 *
 * @example
 * // Basic usage with required props/context
 * import { NAV_ITEMS, SITE_NAME } from './constants'
 * import { Button } from './Button'
 * import { ThemeToggle } from './ThemeToggle'
 *
 * function App() {
 *   return (
 *     <>
 *       <Header />
 *       <main id="main-content">
 *         {/* Page content *\/}
 *       </main>
 *     </>
 *   )
 * }
 *
 * @example
 * // Expected NAV_ITEMS format
 * const NAV_ITEMS = [
 *   { href: '#about', label: 'About' },
 *   { href: '#services', label: 'Services' },
 *   { href: '#contact', label: 'Contact' }
 * ]
 *
 * @example
 * // Integration with layout
 * <div className="min-h-screen">
 *   <Header />
 *   <main id="main-content" className="pt-16">
 *     <Hero />
 *     <About id="about" />
 *     <Services id="services" />
 *     <Contact id="contact" />
 *   </main>
 *   <Footer />
 * </div>
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Note: Replace these with your actual imports
  // import { Button } from '../primitives/Button'
  // import { ThemeToggle } from '../theme/ThemeToggle'
  // import { NAV_ITEMS, SITE_NAME } from '@/constants'
  // import { cn } from '@/shared/utils/cn'
  // import { scrollToSection as scrollToSectionUtil } from '@/utils/navigation'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return

    const menu = mobileMenuRef.current
    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Focus first element when menu opens
    firstElement?.focus()

    const handleTab = (e: KeyboardEvent): void => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        // Shift + Tab: if on first element, go to last
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        // Tab: if on last element, go to first
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    menu.addEventListener('keydown', handleTab)
    return () => menu.removeEventListener('keydown', handleTab)
  }, [isMobileMenuOpen])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    // Replace with your scroll utility: scrollToSectionUtil(href)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Replace with your actual constants
  const SITE_NAME = 'Your Site'
  const NAV_ITEMS = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300
          ${isScrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm'
            : 'bg-transparent'}
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 hover:text-accent dark:hover:text-accent-light transition-colors"
              aria-label="Return to top of page"
            >
              {SITE_NAME}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right side: Theme Toggle + CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* <ThemeToggle /> */}
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              {/* <ThemeToggle /> */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-slate-900 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
