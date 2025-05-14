import type { Meta, StoryObj } from '@storybook/vue3'
import WLatestUpdates from './WLatestUpdates.vue'

const meta = {
  title: 'Example/WLatestUpdates',
  component: WLatestUpdates,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WLatestUpdates>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { WLatestUpdates },
    setup() {
      return { args }
    },
    template: `<WLatestUpdates />`
  })
}
