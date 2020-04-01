import { expect } from 'chai'
import Matrix from '@/foundation/Matrix'

describe('Matrix', () => {

  it('transposed', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ]
    const transposed = Matrix.transposed(matrix)
    expect(transposed).to.be.deep.equal([
      [1, 3],
      [2, 4]
    ])
    expect(matrix).to.be.deep.equal([
      [1, 2],
      [3, 4]
    ])
  })
})
