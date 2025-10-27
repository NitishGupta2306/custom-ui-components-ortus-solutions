# Contributing to Ortus Solutions UI Components

Thank you for your interest in contributing! This document provides guidelines and standards for contributing to this component library.

## Table of Contents

- [Getting Started](#getting-started)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [Documentation Requirements](#documentation-requirements)
- [Submitting Changes](#submitting-changes)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git
- Basic understanding of React and TypeScript
- Familiarity with Tailwind CSS

### Repository Structure

```
react/
├── css-variables-system/    # Components using CSS variables + Radix UI
│   ├── primitives/          # Basic building blocks
│   ├── layout/              # Layout components
│   ├── overlays/            # Modals, popovers, tooltips
│   ├── forms/               # Form inputs
│   ├── navigation/          # Navigation components
│   ├── feedback/            # Toasts, alerts
│   ├── animations/          # Animation components
│   ├── utilities/           # Utility components
│   └── specialized/         # Domain-specific components
├── tailwind-system/         # Pure Tailwind components
│   ├── primitives/
│   ├── layout/
│   ├── animations/
│   ├── indicators/
│   ├── theme/
│   ├── navigation/
│   └── cards/
└── shared/                  # Shared utilities
    ├── hooks/
    ├── utils/
    └── types/
```

## Coding Standards

### File Naming

- **Components:** PascalCase (e.g., `Button.tsx`, `AnimatedCounter.tsx`)
- **Hooks:** kebab-case with `use-` prefix (e.g., `use-tilt.ts`, `use-theme.tsx`)
- **Utils:** kebab-case (e.g., `cn.ts`, `formatters.ts`)
- **Types:** kebab-case (e.g., `index.ts`, `component-types.ts`)

### File Size Limits

- **Components:** Maximum 300 lines
- **Hooks:** Maximum 150 lines
- **Utils:** Maximum 200 lines

If a file exceeds these limits, consider splitting it into smaller, more focused modules.

### Component Structure

Components should follow this order:

```tsx
// 1. Imports (external libraries first, then internal)
import * as React from 'react'
import { SomeLibrary } from 'external-lib'
import { cn } from '@/shared/utils/cn'

// 2. Type definitions
export interface ComponentProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
}

// 3. Component variants (if using CVA)
const componentVariants = cva(/* ... */)

// 4. JSDoc documentation
/**
 * Component description
 * @example
 * ```tsx
 * <Component variant="primary">Content</Component>
 * ```
 */

// 5. Component implementation
export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = 'primary', className, ...props }, ref) => {
    // Hooks
    const [state, setState] = useState()

    // Derived state
    const computed = useMemo(() => {}, [])

    // Event handlers
    const handleClick = () => {}

    // Render
    return <div ref={ref} className={cn(/* ... */)} {...props} />
  }
)

// 6. Display name
Component.displayName = 'Component'
```

### TypeScript Standards

- **Always use TypeScript** - No plain JavaScript files
- **Strict mode enabled** - All type checks must pass
- **Explicit return types** for functions (except when obvious)
- **Proper prop interfaces** - Extend appropriate HTML element types
- **Use generics** where appropriate for reusability

### Naming Conventions

#### Variables and Functions
```tsx
// camelCase for variables and functions
const isActive = true
const handleClick = () => {}
```

#### Components
```tsx
// PascalCase for components
const Button = () => {}
const AnimatedCard = () => {}
```

#### Constants
```tsx
// SCREAMING_SNAKE_CASE for true constants
const MAX_ITEMS = 100
const API_ENDPOINT = 'https://api.example.com'
```

#### Props Interfaces
```tsx
// ComponentNameProps pattern
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}
```

## Component Guidelines

### Accessibility Requirements

All components must meet WCAG AA standards:

- **Semantic HTML** - Use appropriate HTML elements
- **ARIA attributes** - Add when semantic HTML isn't enough
- **Keyboard navigation** - All interactive elements must be keyboard accessible
- **Focus management** - Visible focus indicators required
- **Screen reader support** - Descriptive labels and announcements
- **Color contrast** - Minimum 4.5:1 for normal text, 3:1 for large text

### Styling Guidelines

#### CSS Variables System
- Use CSS variables for theming: `bg-primary`, `text-foreground`
- Follow shadcn/ui patterns
- Utilize Radix UI primitives for complex components
- Use Class Variance Authority (CVA) for variants

#### Tailwind System
- Pure Tailwind utility classes
- No arbitrary values unless absolutely necessary
- Dark mode support with `dark:` prefix
- Responsive design with breakpoint prefixes

### Performance Considerations

- **React.memo** for expensive renders
- **useMemo/useCallback** for expensive computations
- **Code splitting** - Lazy load heavy components
- **Image optimization** - Proper sizing and formats
- **Animation performance** - GPU-accelerated transforms only

### Props Best Practices

1. **Destructure props** in function parameters
2. **Provide defaults** for optional props
3. **Extend native HTML props** when appropriate
4. **Use discriminated unions** for variant-based props
5. **Spread remaining props** to allow customization

```tsx
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', padding = 'md', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
```

## Documentation Requirements

### JSDoc Comments

Every component must include comprehensive JSDoc:

```tsx
/**
 * Button component with multiple variants and sizes
 * Supports loading state and icon composition
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Click me</Button>
 *
 * // With variant
 * <Button variant="destructive">Delete</Button>
 *
 * // Loading state
 * <Button isLoading>Submitting...</Button>
 * ```
 */
export const Button = () => {}
```

### Example Requirements

Include 3-5 examples demonstrating:
1. Basic usage
2. All variants
3. Common use cases
4. Edge cases
5. Composition patterns

### README Updates

When adding new components:
1. Update the component catalog in relevant README
2. List required dependencies
3. Document any breaking changes
4. Include setup instructions

## Submitting Changes

### Issue Guidelines

Use the provided issue template and include:
- **Language/Framework** - Which system (CSS Variables or Tailwind)
- **Component Name** - Specific component affected
- **Issue Type** - Bug, Feature Request, Documentation, Performance
- **Description** - Clear explanation of the issue
- **Steps to Reproduce** - For bugs only

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/component-name
   ```

2. **Make your changes**
   - Follow all coding standards
   - Add comprehensive documentation
   - Update TODO.md if applicable

3. **Test your changes**
   - Verify component works in isolation
   - Check responsive behavior
   - Test keyboard navigation
   - Verify dark mode support

4. **Commit with clear messages**
   ```bash
   git commit -m "Add AnimatedCard component with hover effects"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/component-name
   ```

6. **PR Description should include:**
   - Summary of changes
   - Screenshots/GIFs for visual components
   - Breaking changes (if any)
   - Checklist of testing completed

### Commit Message Format

```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Build process, tooling changes

**Examples:**
```
feat: add DropdownMenu component with keyboard navigation

- Implement Radix UI dropdown primitive
- Add nested menu support
- Include keyboard shortcuts
- Add comprehensive documentation

Closes #123
```

## Code Quality Checklist

Before submitting, ensure:

- [ ] Code follows file naming conventions
- [ ] Component structure matches guidelines
- [ ] TypeScript types are properly defined
- [ ] Accessibility requirements met (WCAG AA)
- [ ] JSDoc documentation included
- [ ] Multiple usage examples provided
- [ ] Component is responsive
- [ ] Dark mode support implemented
- [ ] No console errors or warnings
- [ ] Performance optimizations applied
- [ ] Import paths use shared utilities
- [ ] File size within limits

## Questions?

For questions about contributing:
- Check existing documentation in `docs/`
- Review similar existing components
- Open a discussion issue on GitHub

Thank you for contributing to make this component library better!
