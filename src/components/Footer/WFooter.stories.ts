import type { Meta, StoryObj } from '@storybook/vue3'
import WFooter from './WFooter.vue'

const meta: Meta<typeof WFooter> = {
  title: 'Example/WFooter',
  component: WFooter,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof WFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Footer: Story = {
  render: (args: unknown) => ({
    components: { WFooter },
    setup() {
      return { args }
    },
    template: `<WFooter v-bind="args" />`
  }),
  args: {
    footerSections: [
      {
        title: 'Developers',
        links: [
          {
            url: '#reference',
            label: 'reference'
          },
          {
            url: '#randomness',
            label: 'randomness'
          },
          {
            url: '#randomness',
            label: 'randomness'
          },
          {
            url: '#supported_chains',
            label: 'supported_chains'
          },
          {
            url: '#solidity_sdk',
            label: 'solidity_sdk'
          }
        ]
      },
      {
        title: 'Ecosystem',
        links: [
          {
            url: '#block_explorer',
            label: 'block_explorer'
          },
          {
            url: '#data_feeds_explorer',
            label: 'data_feeds_explorer'
          },
          {
            url: '#sheikah',
            label: 'sheikah'
          },
          {
            url: '#my_wit_wallet',
            label: 'my_wit_wallet'
          }
        ]
      },
      {
        title: 'Learn',
        links: [
          {
            url: '#whitepaper',
            label: 'whitepaper'
          },
          {
            url: '#medium',
            label: 'medium'
          },
          {
            url: '#tutorials',
            label: 'tutorials'
          }
        ]
      }
    ]
  }
}
