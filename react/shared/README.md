# Shared Utilities & Hooks

Common utilities, hooks, and type definitions used across both CSS Variables and Tailwind systems.

## Installation

```bash
npm install clsx tailwind-merge
```

## Utilities

### cn() - Class Name Merger

Combines `clsx` for conditional classes with `tailwind-merge` for Tailwind conflict resolution.

```tsx
import { cn } from '@/shared/utils/cn'

// Basic usage
cn('px-4 py-2', 'bg-blue-500')

// Conditional classes
cn('base-class', isActive && 'active-class')

// Tailwind conflicts (last wins)
cn('px-4', 'px-6') // => 'px-6'
```

### Formatters

Collection of formatting utilities for numbers, currency, dates, and percentages.

```tsx
import {
  formatNumber,
  formatCurrency,
  formatPercentage,
  formatMonthYearLong,
  formatMonthYearShort
} from '@/shared/utils/formatters'

formatNumber(1500)                    // => '1.5K'
formatCurrency(1234.56, 'USD')        // => '$1,235'
formatPercentage(75.5)                // => '75.5%'
formatMonthYearLong('2025-01')        // => 'January 2025'
formatMonthYearShort('2025-01')       // => 'Jan 2025'
```

## Hooks

### useTilt

Add 3D tilt effect to elements based on mouse position. Automatically respects `prefers-reduced-motion`.

```tsx
import { useRef } from 'react'
import { useTilt } from '@/shared/hooks/use-tilt'

function Card() {
  const cardRef = useRef<HTMLDivElement>(null)
  useTilt(cardRef, { max: 20, scale: 1.1 })

  return <div ref={cardRef}>Tilting card</div>
}
```

**Options:**
- `max`: Maximum tilt rotation in degrees (default: 15)
- `scale`: Scale factor on hover (default: 1.05)
- `speed`: Transition speed in ms (default: 300)
- `glare`: Enable glare effect (default: true)

### useTheme

Theme management hook with localStorage persistence and system preference detection.

```tsx
import { ThemeProvider, useTheme } from '@/shared/hooks/use-theme'

// Wrap your app
function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  )
}

// Use in components
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>{theme}</button>
}
```

## Types

Common TypeScript definitions for consistent prop types across components.

```tsx
import type {
  Size,
  Variant,
  Theme,
  Status,
  SkillLevel,
  BaseComponentProps,
  SizeableProps,
  VariantProps
} from '@/shared/types'
```

## File Structure

```
shared/
├── utils/
│   ├── cn.ts              # Class name merger
│   └── formatters.ts      # Formatting utilities
├── hooks/
│   ├── use-tilt.ts        # 3D tilt effect
│   └── use-theme.tsx      # Theme management
└── types/
    └── index.ts           # Common TypeScript types
```
