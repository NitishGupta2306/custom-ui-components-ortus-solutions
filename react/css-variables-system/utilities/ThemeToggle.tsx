/**
 * ThemeToggle Component
 *
 * A theme toggle button component for switching between light and dark modes.
 * Displays sun/moon icons with smooth transitions and includes a tooltip.
 * Uses CSS variables for theming.
 *
 * Note: This component requires a ThemeContext to be set up in your application.
 * The context should provide theme state and toggleTheme function.
 *
 * @module utilities/ThemeToggle
 *
 * @example
 * ```tsx
 * import { ThemeToggle } from '@/components/utilities/ThemeToggle';
 *
 * function Header() {
 *   return (
 *     <header className="flex items-center justify-between p-4">
 *       <h1>My App</h1>
 *       <ThemeToggle />
 *     </header>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Example ThemeContext setup
 * import { createContext, useContext, useState, useEffect } from 'react';
 *
 * interface ThemeContextType {
 *   theme: 'light' | 'dark';
 *   toggleTheme: () => void;
 * }
 *
 * const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
 *
 * export const useTheme = () => {
 *   const context = useContext(ThemeContext);
 *   if (!context) throw new Error('useTheme must be used within ThemeProvider');
 *   return context;
 * };
 * ```
 */

import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="relative inline-block">
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        aria-label="Toggle theme"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
};
