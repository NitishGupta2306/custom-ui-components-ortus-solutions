# CSS Variables System

A comprehensive component system built on CSS custom properties and Radix UI primitives. This system provides maximum flexibility through theme variables and delivers exceptional accessibility through battle-tested Radix UI components.

## Philosophy

The CSS Variables System is designed for:

- **Theme Flexibility** - Easily customize colors, spacing, and styles through CSS variables
- **Accessibility First** - Built on Radix UI primitives with ARIA attributes and keyboard navigation
- **Design System Ready** - Perfect for applications requiring consistent theming
- **Dark Mode Native** - First-class dark mode support through CSS variable switching
- **Type Safety** - Full TypeScript support with comprehensive prop types

## Installation

### Step 1: Install Dependencies

```bash
npm install @ortus-solutions/ui
```

### Step 2: Install Radix UI Packages

The CSS Variables System uses multiple Radix UI primitives:

```bash
npm install @radix-ui/react-slot \
  @radix-ui/react-label \
  @radix-ui/react-separator \
  @radix-ui/react-progress \
  @radix-ui/react-checkbox \
  @radix-ui/react-switch \
  @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu \
  @radix-ui/react-popover \
  @radix-ui/react-select \
  @radix-ui/react-tooltip \
  @radix-ui/react-tabs \
  @radix-ui/react-collapsible \
  @radix-ui/react-toast
```

### Step 3: Install Additional Dependencies

```bash
npm install class-variance-authority clsx tailwind-merge
```

### Step 4: Setup CSS Variables

Create or update your `globals.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### Step 5: Configure Tailwind

Update your `tailwind.config.js`:

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
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
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
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
```

## Component Catalog

### Primitives

Core building blocks for any interface.

#### Button
Multi-variant button with size options and state management.
```tsx
import { Button } from '@ortus-solutions/ui/css-variables-system/primitives/Button'

<Button variant="default">Click me</Button>
<Button variant="destructive" size="lg">Delete</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="ghost">Subtle Action</Button>
<Button variant="link">Learn more</Button>
```

#### Input
Styled text input with error states.
```tsx
import { Input } from '@ortus-solutions/ui/css-variables-system/primitives/Input'

<Input placeholder="Enter email" type="email" />
```

#### Label
Accessible form labels with Radix UI Label.
```tsx
import { Label } from '@ortus-solutions/ui/css-variables-system/primitives/Label'

<Label htmlFor="email">Email Address</Label>
```

#### Badge
Status indicators and tags.
```tsx
import { Badge } from '@ortus-solutions/ui/css-variables-system/primitives/Badge'

<Badge variant="default">New</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Draft</Badge>
```

#### Progress
Progress indicators for loading states.
```tsx
import { Progress } from '@ortus-solutions/ui/css-variables-system/primitives/Progress'

<Progress value={60} />
```

#### Separator
Visual dividers between content sections.
```tsx
import { Separator } from '@ortus-solutions/ui/css-variables-system/primitives/Separator'

<Separator />
<Separator orientation="vertical" />
```

#### Skeleton
Loading placeholders for content.
```tsx
import { Skeleton } from '@ortus-solutions/ui/css-variables-system/primitives/Skeleton'

<Skeleton className="h-4 w-full" />
<Skeleton className="h-12 w-12 rounded-full" />
```

### Layout

Components for structuring your application.

#### Card
Container component with header, content, and footer sections.
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@ortus-solutions/ui/css-variables-system/layout/Card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Alert
Contextual feedback messages.
```tsx
import { Alert, AlertTitle, AlertDescription } from '@ortus-solutions/ui/css-variables-system/layout/Alert'

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

### Forms

Interactive form elements with accessibility.

#### Checkbox
Accessible checkbox with Radix UI.
```tsx
import { Checkbox } from '@ortus-solutions/ui/css-variables-system/forms/Checkbox'

<Checkbox id="terms" />
<Label htmlFor="terms">Accept terms and conditions</Label>
```

#### Switch
Toggle switch for binary options.
```tsx
import { Switch } from '@ortus-solutions/ui/css-variables-system/forms/Switch'

<Switch id="airplane-mode" />
<Label htmlFor="airplane-mode">Airplane Mode</Label>
```

### Overlays

Modal and popover components.

#### Dialog
Modal dialogs with backdrop.
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@ortus-solutions/ui/css-variables-system/overlays/Dialog'

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

#### Dropdown Menu
Context menus and dropdowns.
```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@ortus-solutions/ui/css-variables-system/overlays/DropdownMenu'

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

#### Popover
Floating content containers.
```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@ortus-solutions/ui/css-variables-system/overlays/Popover'

<Popover>
  <PopoverTrigger asChild>
    <Button>Show Info</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Additional information here</p>
  </PopoverContent>
</Popover>
```

#### Select
Dropdown select component.
```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@ortus-solutions/ui/css-variables-system/overlays/Select'

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

#### Tooltip
Hover tooltips with accessibility.
```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@ortus-solutions/ui/css-variables-system/overlays/Tooltip'

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Helpful tooltip text</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Navigation

Navigation components for app structure.

#### Tabs
Tab navigation with Radix UI.
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@ortus-solutions/ui/css-variables-system/navigation/Tabs'

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings content</TabsContent>
  <TabsContent value="password">Password settings content</TabsContent>
</Tabs>
```

#### Breadcrumb
Navigational breadcrumb trail.
```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@ortus-solutions/ui/css-variables-system/navigation/Breadcrumb'

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

#### Collapsible
Expandable content sections.
```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@ortus-solutions/ui/css-variables-system/navigation/Collapsible'

<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    Hidden content that can be toggled
  </CollapsibleContent>
</Collapsible>
```

### Feedback

User feedback and notification components.

#### Toast
Toast notifications with Radix UI Toast.
```tsx
import { useToast } from '@ortus-solutions/ui/css-variables-system/feedback/use-toast'
import { Toaster } from '@ortus-solutions/ui/css-variables-system/feedback/Toaster'

// In your root component
function App() {
  return (
    <>
      <YourApp />
      <Toaster />
    </>
  )
}

// In any component
function MyComponent() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success!",
          description: "Your changes have been saved.",
        })
      }}
    >
      Save
    </Button>
  )
}
```

### Animations

Animation components for visual polish.

#### SplashScreen
Full-screen loading splash with animation.
```tsx
import { SplashScreen } from '@ortus-solutions/ui/css-variables-system/animations/SplashScreen'

<SplashScreen />
```

### Utilities

Utility components for common patterns.

#### ThemeToggle
Light/dark mode toggle button.
```tsx
import { ThemeToggle } from '@ortus-solutions/ui/css-variables-system/utilities/ThemeToggle'

<ThemeToggle />
```

#### EmptyState
Empty state placeholder with icon and message.
```tsx
import { EmptyState } from '@ortus-solutions/ui/css-variables-system/utilities/EmptyState'

<EmptyState
  icon={<SearchIcon />}
  title="No results found"
  description="Try adjusting your search"
/>
```

#### LoadingSkeleton
Customizable loading skeleton component.
```tsx
import { LoadingSkeleton } from '@ortus-solutions/ui/css-variables-system/utilities/LoadingSkeleton'

<LoadingSkeleton count={3} />
```

#### DownloadProgress
Progress indicator for downloads.
```tsx
import { DownloadProgress } from '@ortus-solutions/ui/css-variables-system/utilities/DownloadProgress'

<DownloadProgress progress={45} fileName="document.pdf" />
```

### Specialized

Domain-specific components.

#### ErrorBoundary
React error boundary for graceful error handling.
```tsx
import { ErrorBoundary } from '@ortus-solutions/ui/css-variables-system/specialized/ErrorBoundary'

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <YourComponent />
</ErrorBoundary>
```

#### ProtectedRoute
Route protection component with authentication.
```tsx
import { ProtectedRoute } from '@ortus-solutions/ui/css-variables-system/specialized/ProtectedRoute'

<ProtectedRoute isAuthenticated={user !== null}>
  <Dashboard />
</ProtectedRoute>
```

#### Skeleton Components
- `ChapterCardSkeleton` - Loading state for chapter cards
- `TableSkeleton` - Loading state for data tables
- `StatCardSkeleton` - Loading state for stat cards

## Theming Guide

### Customizing Colors

Modify the CSS variables in your `globals.css` to match your brand:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Your brand color */
  --primary-foreground: 210 40% 98%;
}
```

### Creating Custom Themes

You can create multiple themes by defining different CSS variable sets:

```css
[data-theme="purple"] {
  --primary: 270 80% 60%;
  --accent: 280 70% 65%;
}

[data-theme="green"] {
  --primary: 142 76% 36%;
  --accent: 151 69% 45%;
}
```

## Dark Mode Setup

### Using ThemeProvider

Wrap your app with the `ThemeProvider`:

```tsx
import { ThemeProvider } from '@ortus-solutions/ui/shared/hooks/use-theme'
import { ThemeToggle } from '@ortus-solutions/ui/css-variables-system/utilities/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <header>
          <ThemeToggle />
        </header>
        <main>{/* Your app content */}</main>
      </div>
    </ThemeProvider>
  )
}
```

### Manual Dark Mode Control

```tsx
import { useTheme } from '@ortus-solutions/ui/shared/hooks/use-theme'

function CustomThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Current: {theme}
    </button>
  )
}
```

## Best Practices

1. **Always use the `cn()` utility** for merging classes
2. **Wrap forms with proper labels** for accessibility
3. **Use semantic variants** (destructive for delete actions, etc.)
4. **Test dark mode** for all custom components
5. **Leverage Radix UI primitives** for complex interactions

## Accessibility

All components are built with accessibility in mind:

- ARIA attributes included by default
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Semantic HTML

## TypeScript

Import types as needed:

```tsx
import type { ButtonProps } from '@ortus-solutions/ui/css-variables-system/primitives/Button'
import type { CardProps } from '@ortus-solutions/ui/css-variables-system/layout/Card'
```

## Support

For issues or questions, contact the Ortus Solutions development team.
