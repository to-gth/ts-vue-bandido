import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Square from '@/components/Square.vue'
import SquareBlank from '@/library/SquareBlank'
import SquareFilled from '@/library/SquareFilled'
import Direction from '@/foundation/Direction'
import Limb from '@/library/Limb'


describe('Square.vue', () => {

  it('isFilled', () => {

    const blank = SquareBlank.blank()

    const propsData = { square: blank }
    const options = { propsData }

    const wrapper = shallowMount(Square, options)
    const vm: any = wrapper.vm
    expect(vm.isFilled, 'at blank').to.be.false

    const filled = SquareFilled.from(Direction.Up, Limb.H, false)
    wrapper.setProps({ square: filled })
    expect(vm.isFilled, 'at filled').to.be.true
  })
})
