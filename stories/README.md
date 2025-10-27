# Storybook Stories

This directory contains Storybook stories for all components in the library.

## Running Storybook

```bash
npm install
npm run storybook
```

Storybook will start on http://localhost:6006

## Story Structure

Stories are organized by system:

```
stories/
├── css-variables/        # CSS Variables System components
│   ├── primitives/
│   ├── layout/
│   ├── overlays/
│   ├── forms/
│   ├── navigation/
│   ├── feedback/
│   └── utilities/
├── tailwind/            # Tailwind System components
│   ├── primitives/
│   ├── layout/
│   ├── animations/
│   └── cards/
└── storybook.css       # Global Storybook styles
```

## Creating Stories

Example story template:

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../react/css-variables-system/primitives/Button'

const meta: Meta<typeof Button> = {
  title: 'CSS Variables/Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}
```

## Features

- Interactive controls for component props
- Dark mode toggle
- Accessibility testing
- Responsive viewport testing
- Documentation auto-generation
- Code snippets for each story

## TODO

Stories need to be created for all 48+ components. Priority order:
1. CSS Variables System primitives (most commonly used)
2. Tailwind System primitives
3. Layout components
4. Complex components (overlays, forms, navigation)
5. Specialized components
