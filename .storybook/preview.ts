import type { Preview } from '@storybook/react'
import '../stories/storybook.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f8fafc',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
}

export default preview
