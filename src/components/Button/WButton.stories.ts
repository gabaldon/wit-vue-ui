import type { Meta, StoryObj } from '@storybook/vue3'
import WButton from './WButton.vue'

const meta: Meta<typeof WButton> = {
  title: 'Example/WButton',
  component: WButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'arrow', 'dark'] }
  },
  args: {
    type: 'primary'
  }
} satisfies Meta<typeof WButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args: unknown) => ({
    components: { WButton },
    setup() {
      return { args }
    },
    template: `<WButton v-bind="args">WButton</WButton>`
  }),
  args: {
    type: 'primary'
  }
}

export const Secondary: Story = {
  render: (args: unknown) => ({
    components: { WButton },
    setup() {
      return { args }
    },
    template: `<WButton v-bind="args">WButton</WButton>`
  }),
  args: {
    type: 'secondary'
  }
}

export const Arrow: Story = {
  render: (args: unknown) => ({
    components: { WButton },
    setup() {
      return { args }
    },
    template: `<WButton v-bind="args">WButton</WButton>`
  }),
  args: {
    type: 'arrow'
  }
}

export const Dark: Story = {
  render: (args: unknown) => ({
    components: { WButton },
    setup() {
      return { args }
    },
    template: `<WButton v-bind="args">WButton</WButton>`
  }),
  args: {
    type: 'dark'
  }
}
