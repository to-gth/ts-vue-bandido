// import { expect } from 'chai'
// import { shallowMount } from '@vue/test-utils'
// import Hand from '@/components/Hand.vue'
// import SquareBlank from '@/library/SquareBlank'
// import SquareFill from '@/library/SquareFill'
// import Direction from '@/foundation/Direction'
// import Limb from '@/library/Limb'


// describe('Hand.vue', () => {

//   it('isFill', () => {

//     const blank = SquareBlank.blank()

//     const propsData = { hand:  }
//     const options = { propsData }

//     const wrapper = shallowMount(Hand, options)
//     const vm: any = wrapper.vm
//     expect(vm.isFill, 'at blank').to.be.false

//     const Fill = SquareFill.from(Direction.Up, Limb.H)
//     wrapper.setProps({ square: Fill })
//     expect(vm.isFill, 'at Fill').to.be.true
//   })
// })
