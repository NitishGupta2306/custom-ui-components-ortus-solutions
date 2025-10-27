# Getting Started with Ortus Solutions UI

Welcome to the Ortus Solutions UI component library! This guide will help you get up and running quickly with either the CSS Variables System or the Tailwind System.

## What is this library?

Ortus Solutions UI is a comprehensive React component library offering two distinct design systems:

- **CSS Variables System** - A flexible, theme-driven system built on Radix UI primitives
- **Tailwind System** - A utility-first system optimized for marketing sites and landing pages

Both systems are production-ready, fully typed with TypeScript, and designed for modern React applications.

## Which system should I use?

### Use CSS Variables System when:

- Building complex web applications (dashboards, admin panels, SaaS products)
- You need advanced components (dialogs, dropdowns, tooltips, select menus)
- Accessibility is a critical requirement (Radix UI primitives)
- You want maximum theming flexibility with CSS custom properties
- Your app requires multiple theme support
- You need consistent design system across a large application

### Use Tailwind System when:

- Building marketing websites or landing pages
- You need rich animations and visual effects
- Performance is critical (lighter bundle size)
- You prefer utility-first styling approach
- Your project is presentation-focused
- You want quick setup with minimal configuration

**Not sure?** Read our [detailed comparison guide](./css-variables-vs-tailwind.md).

## Installation Methods

### Method 1: NPM Package (Recommended)

Install the complete library from npm:

```bash
npm install @ortus-solutions/ui
```

This gives you access to both systems and all components.

### Method 2: Copy-Paste Components

For maximum flexibility, copy individual component files directly into your project:

1. Browse the component files in the repository
2. Copy the component file you need
3. Copy the shared utilities (`cn.ts`, `use-theme.tsx`)
4. Install any required dependencies

**Pros:**
- Full control over component code
- Easy customization
- No package dependency

**Cons:**
- Manual updates required
- Need to manage dependencies yourself

## Basic Project Setup

### Prerequisites

Ensure you have:
- Node.js 18+ installed
- React 18+ project set up
- TypeScript configured (recommended)

### Step 1: Create a React Project

If you're starting fresh:

```bash
# Using Next.js (Recommended)
npx create-next-app@latest my-app --typescript --tailwind --app

# Or using Vite
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

### Step 2: Install Tailwind CSS

Both systems require Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Choose Your System

Follow the setup guide for your chosen system:

**For CSS Variables System:**
```bash
# Install Radix UI packages
npm install @radix-ui/react-slot \
  @radix-ui/react-label \
  @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu \
  @radix-ui/react-tooltip

# Install utilities
npm install class-variance-authority clsx tailwind-merge
```

**For Tailwind System:**
```bash
# Install animation and icon libraries
npm install framer-motion lucide-react

# Install utilities
npm install clsx tailwind-merge
```

### Step 4: Configure Tailwind

Update `tailwind.config.js` based on your chosen system.

**CSS Variables System:**
```js
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
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
```

**Tailwind System:**
```js
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
    },
  },
}
```

### Step 5: Setup Global Styles

Create `app/globals.css` (or `src/index.css`):

**For CSS Variables System:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    /* Add more CSS variables... */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* Dark mode variables... */
  }
}
```

**For Tailwind System:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100;
    @apply transition-colors duration-300;
  }
}
```

### Step 6: Setup Theme Provider

Both systems can use the theme provider for dark mode:

```tsx
// app/layout.tsx (Next.js) or main.tsx (Vite)
import { ThemeProvider } from '@ortus-solutions/ui/shared/hooks/use-theme'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## Your First Component

### CSS Variables System Example

```tsx
// app/page.tsx
import { Button } from '@ortus-solutions/ui/css-variables-system/primitives/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@ortus-solutions/ui/css-variables-system/layout/Card'
import { ThemeToggle } from '@ortus-solutions/ui/css-variables-system/utilities/ThemeToggle'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-end mb-8">
        <ThemeToggle />
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Welcome to Ortus UI</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This is your first component using the CSS Variables System.
          </p>
          <div className="flex gap-2">
            <Button variant="default">Primary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Tailwind System Example

```tsx
// app/page.tsx
import { Button } from '@ortus-solutions/ui/tailwind-system/primitives/Button'
import { Card } from '@ortus-solutions/ui/tailwind-system/primitives/Card'
import { Container } from '@ortus-solutions/ui/tailwind-system/layout/Container'
import { ThemeToggle } from '@ortus-solutions/ui/tailwind-system/theme/ThemeToggle'
import { FadeIn } from '@ortus-solutions/ui/tailwind-system/animations/FadeIn'

export default function Home() {
  return (
    <div className="min-h-screen py-12">
      <Container>
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        <FadeIn>
          <Card className="max-w-md mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">
              Welcome to Ortus UI
            </h1>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              This is your first component using the Tailwind System.
            </p>
            <div className="flex gap-2">
              <Button variant="primary">Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </div>
  )
}
```

## Project Structure

Organize your project for optimal maintainability:

```
my-app/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with ThemeProvider
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles with CSS variables
├── components/                   # Your custom components
│   ├── ui/                      # UI components (if copying)
│   └── features/                # Feature-specific components
├── lib/                         # Utilities and helpers
│   ├── utils.ts                 # Shared utilities
│   └── constants.ts             # App constants
├── node_modules/
│   └── @ortus-solutions/ui/     # Installed package
├── package.json
├── tailwind.config.js           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

## Common Setup Issues

### Issue: Components not styled correctly

**Solution:** Ensure Tailwind is processing the component library files:

```js
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@ortus-solutions/ui/**/*.{ts,tsx}', // Important!
  ],
}
```

### Issue: Dark mode not working

**Solution:**
1. Ensure `ThemeProvider` wraps your app
2. Check `darkMode: 'class'` or `darkMode: ['class']` in Tailwind config
3. Verify CSS variables are defined for both light and dark modes

### Issue: TypeScript errors with imports

**Solution:** Add proper path aliases in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./app/*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"]
    }
  }
}
```

### Issue: Radix UI components not working

**Solution:** Ensure all required Radix UI packages are installed:

```bash
npm list @radix-ui/react-dialog
# If not found, install it
npm install @radix-ui/react-dialog
```

## Next Steps

Now that you have the basics set up:

1. **Explore Components** - Browse the component catalogs:
   - [CSS Variables System Components](../react/css-variables-system/README.md#component-catalog)
   - [Tailwind System Components](../react/tailwind-system/README.md#component-catalog)

2. **Learn Theming** - Customize colors and styles:
   - [CSS Variables System Theming](../react/css-variables-system/README.md#theming-guide)
   - [Tailwind System Customization](../react/tailwind-system/README.md#customization)

3. **Study Examples** - Check the usage examples in each component's documentation

4. **Join the Community** - Connect with other Ortus developers for tips and support

## Quick Reference

### Import Paths

**CSS Variables System:**
```tsx
import { Button } from '@ortus-solutions/ui/css-variables-system/primitives/Button'
import { Card } from '@ortus-solutions/ui/css-variables-system/layout/Card'
import { Dialog } from '@ortus-solutions/ui/css-variables-system/overlays/Dialog'
```

**Tailwind System:**
```tsx
import { Button } from '@ortus-solutions/ui/tailwind-system/primitives/Button'
import { Card } from '@ortus-solutions/ui/tailwind-system/primitives/Card'
import { FadeIn } from '@ortus-solutions/ui/tailwind-system/animations/FadeIn'
```

**Shared Utilities:**
```tsx
import { cn } from '@ortus-solutions/ui/shared/utils/cn'
import { useTheme } from '@ortus-solutions/ui/shared/hooks/use-theme'
```

## Getting Help

- **Documentation:** Check system-specific READMEs for detailed guides
- **Examples:** Review component examples in the documentation
- **Support:** Contact the Ortus Solutions development team
- **Issues:** Report bugs to the internal development portal

## Resources

- [CSS Variables vs Tailwind Comparison](./css-variables-vs-tailwind.md)
- [CSS Variables System Documentation](../react/css-variables-system/README.md)
- [Tailwind System Documentation](../react/tailwind-system/README.md)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

Happy coding!
