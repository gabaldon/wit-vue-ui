import type { Meta, StoryObj } from '@storybook/vue3'
import WSwitch from './WSwitch.vue'

const meta = {
  title: 'Example/WSwitch',
  component: WSwitch,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { WSwitch },
    setup() {
      return { args }
    },
    template: `<WSwitch v-bind="args">Switch</Switch>`
  }),
  args: {
    modelValue: true
  }
}
