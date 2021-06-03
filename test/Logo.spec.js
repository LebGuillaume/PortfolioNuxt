import { mount } from '@vue/test-utils'
import header from '@/components/header.vue'

describe('Have a two link in header ', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(header)
    expect(wrapper.vm).toBeTruthy()
  })
})
