import type { Meta, StoryObj } from '@storybook/vue3'
import WInput from './WInput.vue'
import { InputType, inputTypes } from './WInput'

const meta: Meta<typeof WInput> = {
  title: 'Example/WInput',
  component: WInput,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: inputTypes }
  },
  args: {}
} satisfies Meta<typeof WInput>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: (args: unknown) => ({
    components: { WInput },
    setup() {
      return { args }
    },
    template: `<WInput v-bind="args">WInput</WInput>`
  }),
  args: {
    type: InputType.Base,
    contentType: 'string'
  }
}

export const Action: Story = {
  render: (args: unknown) => ({
    components: { WInput },
    setup() {
      return { args }
    },
    template: `<WInput v-bind="args">WInput</WInput>`
  }),
  args: {
    type: InputType.Action,
    placeholder: 'email@mail.com',
    contentType: 'email'
  }
}
