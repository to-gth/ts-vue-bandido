import { expect } from 'chai'
import Rows from '@/library/Rows'

describe('Rows', () => {

  it('blank', () => {
    const rows = Rows.blank()
    expect(rows.length, 'at height').to.equal(Rows.margin)
    expect(rows[0].length, 'at width').to.equal(Rows.margin)
  })
})
