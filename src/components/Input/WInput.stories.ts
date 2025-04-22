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
    template: `<div class="bg-wit-blue-500 dark:bg-black-800 p-2xl"><WInput v-bind="args">WInput</WInput></div>`
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
    template: `<div class="bg-wit-blue-500 dark:bg-black-800 p-2xl"><WInput v-bind="args">WInput</WInput></div>`
  }),
  args: {
    type: InputType.Action,
    placeholder: 'email@mail.com',
    contentType: 'email'
  }
}

export const Icon: Story = {
  render: (args: unknown) => ({
    components: { WInput },
    setup() {
      return { args }
    },
    template: `<div class="bg-wit-blue-500 dark:bg-black-800 p-2xl"><WInput v-bind="args">WInput</WInput></div>`
  }),
  args: {
    type: InputType.Icon,
    placeholder: 'Search'
  }
}
