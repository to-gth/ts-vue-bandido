import { expect } from 'chai'
import Marginor from '@/library/Marginor'
import Row from '@/library/Row'
import SquareBlank from '@/library/SquareBlank'
import SquareFilled from '@/library/SquareFilled'
import Direction from '@/foundation/Direction'
import Limb from '@/library/Limb'
import Deadlocks from '@/library/Deadlocks'

describe('Marginor', () => {

  it('fromBy: empty', () => {
    const rows = [...Array(2)].map(() => Row.blank(2))
    const { left, top, right, bottom } = Marginor.fromBy(rows)
    expect(left).to.equal(0, 'failed left')
    expect(top).to.equal(0, 'falied top')
    expect(right).to.equal(0, 'falied right')
    expect(bottom).to.equal(0, 'falied bottom')
  })

  it('fromBy: one card', () => {
    const rows = [...Array(2)].map(() => Row.blank(2))
    rows[0][0] = SquareFilled.from(Direction.Left, Limb.L, false)
    rows[0][1] = SquareFilled.from(Direction.Right, Limb.HR, false)
    const { left, top, right, bottom } = Marginor.fromBy(rows)
    console.log('left, top, right, bottom', left, top, right, bottom)
    expect(left).to.equal(2, 'failed left')
    expect(top).to.equal(2, 'falied top')
    expect(right).to.equal(2, 'falied right')
    expect(bottom).to.equal(1, 'falied bottom')
  })
})
