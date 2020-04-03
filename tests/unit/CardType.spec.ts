import { expect } from 'chai'
import CardType from '@/library/CardType'

describe('CardType', () => {

  it('numberOf', () => {

    expect(CardType.numberOf(CardType.HRxD)).to.equal(3)
    expect(CardType.numberOf(CardType.LHRxLHR)).to.equal(1)
    expect(CardType.numberOf(CardType.LxR)).to.equal(2)
    expect(CardType.numberOf(CardType.LHRxL)).to.equal(2)
  })
})
