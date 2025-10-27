# Ortus Solutions UI Components - React

A comprehensive, enterprise-ready React component library featuring two distinct design systems optimized for different use cases.

## Overview

This library provides two complete UI systems:

1. **CSS Variables System** - A flexible, theme-driven system using CSS custom properties and Radix UI primitives
2. **Tailwind System** - A utility-first system with custom animations and pre-built components

Both systems are production-ready, fully typed with TypeScript, and designed for modern React applications.

## Quick Start

### Installation

```bash
npm install @ortus-solutions/ui
```

### Peer Dependencies

Ensure you have these installed in your project:

```bash
npm install react@^18.0.0 react-dom@^18.0.0
```

### Basic Setup

#### For CSS Variables System

1. Install Tailwind CSS and configure it:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Import required utilities:

```tsx
// app/layout.tsx or main entry file
import '@/styles/globals.css'
```

3. Use components:

```tsx
import { Button } from '@ortus-solutions/ui/css-variables-system/primitives/Button'
import { Card } from '@ortus-solutions/ui/css-variables-system/layout/Card'

function App() {
  return (
    <Card>
      <Button variant="default">Get Started</Button>
    </Card>
  )
}
```

#### For Tailwind System

1. Configure Tailwind CSS with custom theme:

```tsx
import { Button } from '@ortus-solutions/ui/tailwind-system/primitives/Button'
import { ThemeProvider } from '@ortus-solutions/ui/shared/hooks/use-theme'

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Get Started</Button>
    </ThemeProvider>
  )
}
```

## TypeScript Support

All components are fully typed with TypeScript. The library exports complete type definitions for props, variants, and utilities.

```tsx
import { ButtonProps } from '@ortus-solutions/ui/css-variables-system/primitives/Button'
import type { Theme } from '@ortus-solutions/ui/shared/hooks/use-theme'
```

## Shared Utilities

Both systems share common utilities:

### `cn()` - Class Name Utility

```tsx
import { cn } from '@ortus-solutions/ui/shared/utils/cn'

// Merge Tailwind classes with conflict resolution
const classes = cn('px-4 py-2', 'bg-blue-500', condition && 'font-bold')
```

### `useTheme()` - Theme Management Hook

```tsx
import { useTheme, ThemeProvider } from '@ortus-solutions/ui/shared/hooks/use-theme'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>Toggle Theme</button>
}
```

## Tailwind Configuration

### CSS Variables System

```js
// tailwind.config.js
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@ortus-solutions/ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
```

### Tailwind System

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@ortus-solutions/ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#60a5fa',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
}
```

## Documentation

### System-Specific Guides

- [CSS Variables System Documentation](./css-variables-system/README.md)
- [Tailwind System Documentation](./tailwind-system/README.md)

### General Documentation

- [Getting Started Guide](../docs/getting-started.md)
- [CSS Variables vs Tailwind Comparison](../docs/css-variables-vs-tailwind.md)

## Which System Should I Use?

**Use CSS Variables System when:**
- Building complex applications with multiple themes
- Need maximum design flexibility
- Want Radix UI accessibility primitives
- Require advanced components (dialogs, dropdowns, tooltips)

**Use Tailwind System when:**
- Building marketing websites or landing pages
- Need custom animations and motion
- Prefer utility-first styling
- Want lighter, more performant components

## Package Structure

```
@ortus-solutions/ui/
├── react/
│   ├── css-variables-system/    # Theme-driven components
│   ├── tailwind-system/          # Utility-first components
│   └── shared/                   # Shared utilities and hooks
└── docs/                         # Documentation
```

## Dependencies

### CSS Variables System Dependencies

- `@radix-ui/*` - Accessible component primitives
- `class-variance-authority` - Variant management
- `tailwind-merge` - Class merging utility

### Tailwind System Dependencies

- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `tailwind-merge` - Class merging utility

### Shared Dependencies

- `clsx` - Conditional class utility
- `tailwindcss` - Utility-first CSS framework

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)

## Contributing

This is an internal Ortus Solutions library. For bug reports or feature requests, please contact the development team.

## License

MIT License - Copyright (c) 2024 Ortus Solutions

## Support

For support, email dev@ortussolutions.com or visit our internal documentation portal.
