import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Square from '@/components/Square.vue'
import SquareRoom from '@/library/SquareRoom'
import SquareFilled from '@/library/SquareFilled'
import Direction from '@/foundation/Direction'
import Limb from '@/library/Limb'


describe('Square.vue', () => {

  it('isFilled', () => {

    const blank = SquareRoom.blank()

    const propsData = { square: blank }
    const options = { propsData }

    const wrapper = shallowMount(Square, options)
    const vm: any = wrapper.vm
    expect(vm.isFilled, 'at blank').to.be.false

    const filled = SquareFilled.from(Direction.Up, Limb.H)
    wrapper.setProps({ square: filled })
    expect(vm.isFilled, 'at filled').to.be.true
  })
})
