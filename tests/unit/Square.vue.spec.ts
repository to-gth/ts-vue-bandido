import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Square from '@/components/Square.vue'
import SquareRoom from '@/library/SquareRoom'
import SquareFill from '@/library/SquareFill'
import Direction from '@/foundation/Direction'
import Limb from '@/library/Limb'


describe('Square.vue', () => {

  it('isFill', () => {

    const blank = SquareRoom.blank()

    const propsData = { square: blank }
    const options = { propsData }

    const wrapper = shallowMount(Square, options)
    const vm: any = wrapper.vm
    expect(vm.isFill, 'at blank').to.be.false

    const Fill = SquareFill.from(Direction.Up, Limb.H)
    wrapper.setProps({ square: Fill })
    expect(vm.isFill, 'at Fill').to.be.true
  })
})
