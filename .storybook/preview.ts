import type { Preview } from '@storybook/vue3-vite'
import { createPinia } from 'pinia'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (story) => {
      const pinia = createPinia()
      return {
        setup() {
          return { story }
        },
        template: '<story />',
        global: {
          plugins: [pinia]
        }
      }
    }
  ]
}

export default preview
