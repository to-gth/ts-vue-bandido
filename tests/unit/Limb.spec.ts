import { expect } from 'chai'
import Limb from '@/library/Limb'
import CardType from '@/library/CardType'

describe('Limb', () => {

  it('primaryOf', () => {
    expect(Limb.primaryOf(CardType.HRxD)).to.equal(Limb.HR)
    expect(Limb.primaryOf(CardType.LHRxH)).to.equal(Limb.LHR)
    expect(Limb.primaryOf(CardType.RxD)).to.equal(Limb.R)
    expect(Limb.primaryOf(CardType.LxH)).to.equal(Limb.L)
  })

  it('secondaryOf', () => {
    expect(Limb.secondaryOf(CardType.HRxR)).to.equal(Limb.R)
    expect(Limb.secondaryOf(CardType.LHRxH)).to.equal(Limb.H)
    expect(Limb.secondaryOf(CardType.RxD)).to.equal(Limb.D)
    expect(Limb.secondaryOf(CardType.LHxHR)).to.equal(Limb.HR)
  })
})
