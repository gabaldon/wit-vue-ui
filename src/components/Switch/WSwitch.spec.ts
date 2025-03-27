import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Switch from './WSwitch.vue'

describe('WSwitch', () => {
  it('it renders correctly', () => {
    const modelValue = true
    const wrapper = mount(Switch, { props: { modelValue } })

    expect(wrapper.element).toMatchSnapshot()
  })
})
