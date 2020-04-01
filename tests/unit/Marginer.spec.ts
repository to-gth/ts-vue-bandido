import { expect } from 'chai'
import Marginer from '@/library/Marginer'
import Row from '@/library/Row'
import Marginor from '@/library/Marginor'

describe('Marginer', () => {

  it('doing', () => {
    const rows = [...Array(2)].map(() => Row.blank(2))
    const marginor = Marginor.from(2, 2, 2, 1)
    Marginer.doing(rows, marginor)
    expect(rows.length, 'at height').to.equal(5)
    expect(rows[0].length, 'at width').to.equal(6)
  })
})
