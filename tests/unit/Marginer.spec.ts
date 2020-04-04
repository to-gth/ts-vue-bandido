import { expect } from 'chai'
import RowsMarginer from '@/library/RowsMarginer'
import Row from '@/library/Row'
import RowsMarginor from '@/library/RowsMarginor'

describe('Marginer', () => {

  it('doing', () => {
    const rows = [...Array(2)].map(() => Row.blank(2))
    const marginor = RowsMarginor.from(2, 2, 2, 1)
    RowsMarginer.doing(rows, marginor)
    expect(rows.length, 'at height').to.equal(5)
    expect(rows[0].length, 'at width').to.equal(6)
  })
})
