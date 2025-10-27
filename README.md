# Ortus Solutions UI Components

A comprehensive, reusable UI component library for Ortus Solutions projects. This library provides battle-tested components extracted from production applications, offering two distinct styling systems to match your project needs.

## Features

- **Two Styling Systems**: Choose between CSS Variables or Pure Tailwind approaches
- **48+ Components**: Primitives, layouts, overlays, forms, animations, and more
- **TypeScript First**: Full type safety and IntelliSense support
- **Accessible**: WCAG AA compliant components
- **Copy-Paste Friendly**: Own your components, no npm dependencies to manage
- **Framework Agnostic**: Currently React, expandable to other frameworks

## Quick Start

### Installation

This library uses a copy-paste approach (inspired by shadcn/ui). Simply copy the components you need into your project.

1. Choose your styling system:
   - **CSS Variables System**: More flexible theming, uses Radix UI primitives
   - **Tailwind System**: Simpler setup, pure Tailwind CSS

2. Copy components from the respective folders:
   ```bash
   react/css-variables-system/  # For CSS variables approach
   react/tailwind-system/       # For pure Tailwind approach
   ```

3. Install required dependencies (see system-specific READMEs)

4. Import and use in your project

### Example Usage

```tsx
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

function App() {
  return (
    <Card>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </Card>
  )
}
```

## Documentation

### Getting Started
- [Getting Started Guide](./docs/getting-started.md) - Complete setup guide for new projects
- [CSS Variables vs Tailwind Comparison](./docs/css-variables-vs-tailwind.md) - Detailed system comparison and decision guide

### System Documentation
- [React Components Overview](./react/README.md) - Overview of both systems with installation guides
- [CSS Variables System](./react/css-variables-system/README.md) - Complete guide for CSS Variables system
- [Tailwind System](./react/tailwind-system/README.md) - Complete guide for Tailwind system

### Contributing
- [Contributing Guidelines](./CONTRIBUTING.md) - How to contribute to this library

## Component Catalog

### CSS Variables System (32 components)
Primitives, Layout, Overlays, Forms, Navigation, Feedback, Animations, Utilities

[View full catalog →](./react/css-variables-system/README.md)

### Tailwind System (16 components)
Primitives, Layout, Animations, Indicators, Theme, Card Templates

[View full catalog →](./react/tailwind-system/README.md)

## Philosophy

This library prioritizes:

1. **Developer Control**: You own the code, modify as needed
2. **Consistency**: Standardized patterns across projects
3. **Flexibility**: Choose the styling approach that fits your needs
4. **Quality**: Production-tested, accessible, performant components

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](./CONTRIBUTING.md) before submitting changes.

## License

MIT License - see [LICENSE](./LICENSE) for details

## Support

- Report issues: [GitHub Issues](https://github.com/NitishGupta2306/custom-ui-components-ortus-solutions/issues)
- Documentation: See `docs/` folder
- Examples: View Storybook stories

---

Built with ❤️ by Ortus Solutions
