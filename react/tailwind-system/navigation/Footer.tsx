import { Linkedin, Github, Twitter, Mail } from 'lucide-react'

/**
 * A comprehensive footer component with branding, navigation, and social links.
 *
 * @component
 * @description
 * Footer provides a multi-column layout with:
 * - Brand name and tagline
 * - Quick navigation links
 * - Social media icons with hover effects
 * - Copyright information
 * - Technology stack badge
 * - Dark theme optimized colors
 * - Responsive grid layout (stacks on mobile)
 *
 * Note: This component requires external constants.
 * You'll need to provide:
 * - SITE_NAME constant
 * - NAV_ITEMS array
 * - SOCIAL_LINKS object
 * - scrollToSection utility
 *
 * @example
 * // Basic usage with required imports
 * import { Footer } from './Footer'
 * import { SITE_NAME, NAV_ITEMS, SOCIAL_LINKS } from './constants'
 * import { scrollToSection } from './utils'
 *
 * function App() {
 *   return (
 *     <div>
 *       <main>{/* content *\/}</main>
 *       <Footer />
 *     </div>
 *   )
 * }
 *
 * @example
 * // Expected constants format
 * const SITE_NAME = 'Ortus Solutions'
 * const NAV_ITEMS = [
 *   { href: '#about', label: 'About' },
 *   { href: '#services', label: 'Services' }
 * ]
 * const SOCIAL_LINKS = {
 *   linkedin: 'https://linkedin.com/in/...',
 *   github: 'https://github.com/...',
 *   twitter: 'https://twitter.com/...',
 *   email: 'contact@example.com'
 * }
 *
 * @example
 * // Full page layout
 * <div className="min-h-screen flex flex-col">
 *   <Header />
 *   <main className="flex-grow">
 *     {/* Page content *\/}
 *   </main>
 *   <Footer />
 * </div>
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  // Replace with your actual imports
  // import { SITE_NAME, NAV_ITEMS, SOCIAL_LINKS } from '@/constants'
  // import { scrollToSection } from '@/utils/navigation'

  const SITE_NAME = 'Your Site'
  const NAV_ITEMS = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]
  const SOCIAL_LINKS = {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    email: 'hello@example.com',
  }

  const socialIcons = [
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{SITE_NAME}</h3>
            <p className="text-slate-400 text-sm">
              Building data pipelines & automation solutions from zero.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-slate-400 hover:text-accent-light transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-accent-light transition-[background-color,color] duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
