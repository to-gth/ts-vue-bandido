import { expect } from 'chai'
import RowsMarginor from '@/library/RowsMarginor'
import Row from '@/library/Row'
import SquareFilled from '@/library/SquareFilled'
import Direction from '@/foundation/Direction'
import Limb from '@/library/Limb'

describe('RowsMarginor', () => {

  it('fromBy: empty', () => {
    const rows = [...Array(2)].map(() => Row.blank(2))
    const { left, top, right, bottom } = RowsMarginor.fromBy(rows)
    expect(left).to.equal(0, 'failed left')
    expect(top).to.equal(0, 'falied top')
    expect(right).to.equal(0, 'falied right')
    expect(bottom).to.equal(0, 'falied bottom')
  })

  it('fromBy: one card', () => {
    const rows = [...Array(2)].map(() => Row.blank(2))
    rows[0][0] = SquareFilled.from(Direction.Left, Limb.L)
    rows[0][1] = SquareFilled.from(Direction.Right, Limb.HR)
    const { left, top, right, bottom } = RowsMarginor.fromBy(rows)
    expect(left).to.equal(2, 'failed left')
    expect(top).to.equal(2, 'falied top')
    expect(right).to.equal(2, 'falied right')
    expect(bottom).to.equal(1, 'falied bottom')
  })
})
