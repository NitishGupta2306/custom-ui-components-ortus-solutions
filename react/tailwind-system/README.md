# Tailwind System

A modern, utility-first component system built with Tailwind CSS, Framer Motion, and custom animations. This system is optimized for marketing sites, landing pages, and applications that require rich animations and visual effects.

## Philosophy

The Tailwind System is designed for:

- **Utility-First Styling** - Direct control over styling with Tailwind utilities
- **Rich Animations** - Smooth, performant animations with Framer Motion
- **Lightweight** - Minimal dependencies for faster load times
- **Visual Impact** - Components optimized for marketing and presentation
- **Dark Mode** - Built-in dark mode with simple toggle
- **Performance** - Tree-shakeable, optimized for production builds

## Installation

### Step 1: Install Core Dependencies

```bash
npm install @ortus-solutions/ui
```

### Step 2: Install Required Packages

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

### Step 3: Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 4: Configure Tailwind

Update your `tailwind.config.js`:

```js
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './node_modules/@ortus-solutions/ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#3b82f6', // Customize your accent color
          dark: '#2563eb',
          light: '#60a5fa',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite',
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
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

### Step 5: Setup Global Styles

Create or update your `globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --accent: 59 130 246;
    --accent-dark: 37 99 235;
    --accent-light: 96 165 250;
  }

  body {
    @apply bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100;
    @apply transition-colors duration-300;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

## Component Catalog

### Primitives

Core building blocks with utility-first styling.

#### Button
Versatile button with variants and loading states.
```tsx
import { Button } from '@ortus-solutions/ui/tailwind-system/primitives/Button'

<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button isLoading>Loading...</Button>
```

**Variants:**
- `primary` - Accent color background
- `secondary` - Neutral gray background
- `outline` - Bordered outline style

**Sizes:**
- `sm` - Small (px-4 py-2)
- `md` - Medium (px-6 py-3) - default
- `lg` - Large (px-8 py-4)

#### Card
Flexible card container with tilt effect.
```tsx
import { Card } from '@ortus-solutions/ui/tailwind-system/primitives/Card'

<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

<Card className="bg-gradient-to-br from-blue-500 to-purple-600">
  <h3 className="text-white">Gradient Card</h3>
</Card>
```

### Layout

Structural components for page organization.

#### Container
Responsive container with max-width constraints.
```tsx
import { Container } from '@ortus-solutions/ui/tailwind-system/layout/Container'

<Container>
  <h1>Centered Content</h1>
</Container>

<Container size="sm">
  <p>Narrow container for reading</p>
</Container>
```

**Sizes:**
- `sm` - max-w-3xl
- `md` - max-w-5xl (default)
- `lg` - max-w-7xl
- `xl` - max-w-screen-2xl
- `full` - w-full

#### Section
Full-width section with padding and background options.
```tsx
import { Section } from '@ortus-solutions/ui/tailwind-system/layout/Section'

<Section>
  <h2>Section Content</h2>
</Section>

<Section variant="dark">
  <h2>Dark Section</h2>
</Section>

<Section variant="accent">
  <h2>Accent Section</h2>
</Section>
```

**Variants:**
- `default` - Light background
- `dark` - Dark background
- `accent` - Accent color background

#### SectionHeading
Styled heading with optional subtitle.
```tsx
import { SectionHeading } from '@ortus-solutions/ui/tailwind-system/layout/SectionHeading'

<SectionHeading
  title="Our Services"
  subtitle="Everything you need to succeed"
/>

<SectionHeading
  title="Get Started"
  subtitle="Join thousands of satisfied customers"
  align="center"
/>
```

**Alignment:**
- `left` (default)
- `center`

### Cards

Pre-built card components for common use cases.

#### ProjectCard
Showcase project with image and details.
```tsx
import { ProjectCard } from '@ortus-solutions/ui/tailwind-system/cards/ProjectCard'

<ProjectCard
  title="E-Commerce Platform"
  description="Modern shopping experience with React and Node.js"
  image="/projects/ecommerce.jpg"
  tags={['React', 'Node.js', 'MongoDB']}
  link="/projects/ecommerce"
/>
```

#### ServiceCard
Display services with icon and description.
```tsx
import { ServiceCard } from '@ortus-solutions/ui/tailwind-system/cards/ServiceCard'
import { Code } from 'lucide-react'

<ServiceCard
  icon={<Code className="w-8 h-8" />}
  title="Web Development"
  description="Custom web applications built with modern technologies"
/>
```

#### TeamMemberCard
Showcase team member with photo and role.
```tsx
import { TeamMemberCard } from '@ortus-solutions/ui/tailwind-system/cards/TeamMemberCard'

<TeamMemberCard
  name="Jane Smith"
  role="Senior Developer"
  image="/team/jane.jpg"
  bio="Full-stack developer with 10+ years experience"
  social={{
    linkedin: 'https://linkedin.com/in/janesmith',
    github: 'https://github.com/janesmith',
    twitter: 'https://twitter.com/janesmith'
  }}
/>
```

### Animations

Motion components powered by Framer Motion.

#### FadeIn
Fade in animation on mount or scroll.
```tsx
import { FadeIn } from '@ortus-solutions/ui/tailwind-system/animations/FadeIn'

<FadeIn>
  <h2>This fades in</h2>
</FadeIn>

<FadeIn delay={0.2}>
  <p>This fades in after a delay</p>
</FadeIn>

<FadeIn direction="up">
  <div>Fades in from bottom</div>
</FadeIn>
```

**Directions:**
- `none` - Just fade (default)
- `up` - Slide up while fading
- `down` - Slide down while fading
- `left` - Slide from left
- `right` - Slide from right

#### SlideUp
Slide up animation for reveal effects.
```tsx
import { SlideUp } from '@ortus-solutions/ui/tailwind-system/animations/SlideUp'

<SlideUp>
  <div className="card">Content slides up</div>
</SlideUp>

<SlideUp delay={0.3}>
  <p>Delayed slide up</p>
</SlideUp>
```

#### TypingAnimation
Typewriter effect for text.
```tsx
import { TypingAnimation } from '@ortus-solutions/ui/tailwind-system/animations/TypingAnimation'

<TypingAnimation
  text="Welcome to our platform"
  duration={50}
/>

<TypingAnimation
  text="Building amazing experiences"
  duration={30}
  className="text-2xl font-bold"
/>
```

**Props:**
- `text` - Text to animate
- `duration` - Duration per character (ms)
- `className` - Additional styles

#### AnimatedCounter
Number counter animation.
```tsx
import { AnimatedCounter } from '@ortus-solutions/ui/tailwind-system/animations/AnimatedCounter'

<AnimatedCounter
  from={0}
  to={1000}
  duration={2}
/>

<AnimatedCounter
  from={0}
  to={99.9}
  duration={1.5}
  decimals={1}
  suffix="%"
/>
```

**Props:**
- `from` - Starting number
- `to` - Target number
- `duration` - Animation duration (seconds)
- `decimals` - Decimal places (optional)
- `prefix` - Text before number (optional)
- `suffix` - Text after number (optional)

### Indicators

Visual indicators and status components.

#### SkillLevel
Visual skill level indicator with progress bar.
```tsx
import { SkillLevel } from '@ortus-solutions/ui/tailwind-system/indicators/SkillLevel'

<SkillLevel
  skill="React"
  level={90}
/>

<SkillLevel
  skill="TypeScript"
  level={85}
  color="blue"
/>
```

**Colors:**
- `blue` (default)
- `green`
- `purple`
- `red`
- `orange`

### Navigation

Navigation components for site structure.

#### Header
Responsive header with navigation and theme toggle.
```tsx
import { Header } from '@ortus-solutions/ui/tailwind-system/navigation/Header'

<Header
  logo="/logo.svg"
  logoText="Company Name"
  links={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]}
/>
```

#### Footer
Site footer with links and copyright.
```tsx
import { Footer } from '@ortus-solutions/ui/tailwind-system/navigation/Footer'

<Footer
  logo="/logo.svg"
  logoText="Company Name"
  description="Building amazing digital experiences"
  links={{
    'Company': [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
    ],
    'Resources': [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' },
    ],
  }}
  social={{
    twitter: 'https://twitter.com/company',
    github: 'https://github.com/company',
    linkedin: 'https://linkedin.com/company',
  }}
/>
```

### Theme

Dark mode components.

#### ThemeToggle
Toggle between light and dark themes.
```tsx
import { ThemeToggle } from '@ortus-solutions/ui/tailwind-system/theme/ThemeToggle'
import { ThemeProvider } from '@ortus-solutions/ui/shared/hooks/use-theme'

function App() {
  return (
    <ThemeProvider>
      <header>
        <ThemeToggle />
      </header>
      {/* Your app content */}
    </ThemeProvider>
  )
}
```

## Dark Mode Setup

### Step 1: Wrap App with ThemeProvider

```tsx
import { ThemeProvider } from '@ortus-solutions/ui/shared/hooks/use-theme'

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  )
}
```

### Step 2: Add ThemeToggle Component

```tsx
import { ThemeToggle } from '@ortus-solutions/ui/tailwind-system/theme/ThemeToggle'

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Logo />
      <ThemeToggle />
    </header>
  )
}
```

### Step 3: Use Theme Hook (Optional)

```tsx
import { useTheme } from '@ortus-solutions/ui/shared/hooks/use-theme'

function CustomThemeControl() {
  const { theme, setTheme, toggleTheme } = useTheme()

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => setTheme('dark')}>Force Dark</button>
      <button onClick={() => setTheme('light')}>Force Light</button>
    </div>
  )
}
```

## Custom Animations

### Using Framer Motion Directly

All animation components use Framer Motion under the hood. You can create custom animations:

```tsx
import { motion } from 'framer-motion'

function CustomAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Custom animated content
    </motion.div>
  )
}
```

### Scroll-Based Animations

Use Framer Motion's scroll animations:

```tsx
import { motion, useScroll, useTransform } from 'framer-motion'

function ParallaxSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.div style={{ y }}>
      Parallax content
    </motion.div>
  )
}
```

### Stagger Animations

Create staggered list animations:

```tsx
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function StaggeredList() {
  return (
    <motion.ul variants={container} initial="hidden" animate="show">
      {items.map((item) => (
        <motion.li key={item} variants={item}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}
```

## Using Lucide Icons

The Tailwind System uses Lucide React for icons:

```tsx
import { Home, User, Settings, Mail, Search } from 'lucide-react'

function IconExamples() {
  return (
    <div className="flex gap-4">
      <Home className="w-6 h-6" />
      <User className="w-6 h-6 text-accent" />
      <Settings className="w-6 h-6 text-blue-500" />
      <Mail className="w-8 h-8" />
      <Search className="w-5 h-5" />
    </div>
  )
}
```

Browse all icons at: [https://lucide.dev/icons/](https://lucide.dev/icons/)

## Common Patterns

### Hero Section

```tsx
import { Container } from '@ortus-solutions/ui/tailwind-system/layout/Container'
import { Button } from '@ortus-solutions/ui/tailwind-system/primitives/Button'
import { FadeIn } from '@ortus-solutions/ui/tailwind-system/animations/FadeIn'

function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
      <Container>
        <FadeIn>
          <h1 className="text-5xl font-bold mb-4">
            Build Amazing Products
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            The best component library for modern React applications
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
```

### Feature Grid

```tsx
import { Container } from '@ortus-solutions/ui/tailwind-system/layout/Container'
import { ServiceCard } from '@ortus-solutions/ui/tailwind-system/cards/ServiceCard'
import { SlideUp } from '@ortus-solutions/ui/tailwind-system/animations/SlideUp'
import { Code, Zap, Shield } from 'lucide-react'

function Features() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <SlideUp delay={0}>
            <ServiceCard
              icon={<Code />}
              title="Modern Stack"
              description="Built with the latest React and TypeScript"
            />
          </SlideUp>
          <SlideUp delay={0.1}>
            <ServiceCard
              icon={<Zap />}
              title="Lightning Fast"
              description="Optimized for performance and speed"
            />
          </SlideUp>
          <SlideUp delay={0.2}>
            <ServiceCard
              icon={<Shield />}
              title="Type Safe"
              description="Full TypeScript support out of the box"
            />
          </SlideUp>
        </div>
      </Container>
    </section>
  )
}
```

## Customization

### Custom Accent Color

Update your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#8b5cf6', // Purple
          dark: '#7c3aed',
          light: '#a78bfa',
        },
      },
    },
  },
}
```

### Custom Fonts

Add fonts in your `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

## Performance Tips

1. **Use dynamic imports** for heavy components:
```tsx
const AnimatedCounter = dynamic(() =>
  import('@ortus-solutions/ui/tailwind-system/animations/AnimatedCounter')
)
```

2. **Optimize images** with Next.js Image component
3. **Lazy load animations** using Intersection Observer
4. **Minimize Framer Motion usage** on mobile devices

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)

## TypeScript

All components include full TypeScript definitions:

```tsx
import type { ButtonProps } from '@ortus-solutions/ui/tailwind-system/primitives/Button'
import type { CardProps } from '@ortus-solutions/ui/tailwind-system/primitives/Card'
```

## Support

For issues or questions, contact the Ortus Solutions development team.
