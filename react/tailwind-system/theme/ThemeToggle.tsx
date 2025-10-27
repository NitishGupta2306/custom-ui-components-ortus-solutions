import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/shared/hooks/use-theme'
import { motion } from 'framer-motion'

/**
 * A theme toggle button that switches between light and dark modes.
 *
 * @component
 * @description
 * ThemeToggle provides an animated button for switching theme modes:
 * - Displays Moon icon in light mode, Sun icon in dark mode
 * - 180-degree rotation animation on toggle
 * - Uses useTheme hook for theme management
 * - Accessible with proper aria-label
 * - Styled with hover states
 * - Dark mode aware colors
 *
 * Requires a ThemeProvider/ThemeContext wrapping the application.
 *
 * @example
 * // Basic usage in header
 * <header>
 *   <nav>
 *     <Logo />
 *     <ThemeToggle />
 *   </nav>
 * </header>
 *
 * @example
 * // In a settings panel
 * <div className="settings">
 *   <h3>Appearance</h3>
 *   <div className="flex items-center justify-between">
 *     <span>Dark Mode</span>
 *     <ThemeToggle />
 *   </div>
 * </div>
 *
 * @example
 * // Mobile menu
 * <div className="mobile-menu">
 *   <NavLinks />
 *   <div className="flex gap-4">
 *     <ThemeToggle />
 *     <MenuButton />
 *   </div>
 * </div>
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-slate-700" />
        ) : (
          <Sun className="w-5 h-5 text-warning" />
        )}
      </motion.div>
    </button>
  )
}
