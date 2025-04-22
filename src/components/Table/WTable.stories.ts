import type { Meta, StoryObj } from '@storybook/vue3'
import WTable from './WTable.vue'
import { getMockupData, getMockupLabels } from './utils'

const meta: Meta<typeof WTable> = {
  title: 'Example/WTable',
  component: WTable,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: unknown) => ({
    components: { WTable },
    setup() {
      return { args }
    },
    template: `<WTable v-bind="args" />`
  }),
  args: {
    labels: getMockupLabels(),
    data: getMockupData()
  }
}
