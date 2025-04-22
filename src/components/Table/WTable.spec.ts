import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WTable from './WTable.vue'
import { getMockupData, getMockupLabels } from './utils'

describe('WTable', () => {
  it('renders properly', () => {
    const wrapper = mount(WTable, {
      props: {
        labels: getMockupLabels(),
        data: getMockupData()
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
