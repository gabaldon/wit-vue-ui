import type { Preview } from '@storybook/vue3'
import '../src/assets/main.css'
import '../src/assets/colors.scss'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light'
    })
  ],
  parameters: {
    backgrounds: { disable: true }
  }
}

export default preview
