import { expect } from 'chai'
import Row from '@/library/Row'
import SquareFilled from '@/library/SquareFilled'
import Direction from '@/foundation/Direction'
import Limb from '@/library/Limb'
// import SquareBlank from '@/library/SquareBlank'
// import Matrix from '@/foundation/Matrix'

describe('Row', () => {

  it('isBlankAt: empty', () => {
    const rows = [...Array(2)].map(() => Row.blank(2))
    expect(Row.isBlankAt(0, rows), 'at 0').to.be.true
    expect(Row.isBlankAt(1, rows), 'at 1').to.be.true
    expect(Row.isBlankAt(-2, rows), 'at -2').to.be.true
    expect(Row.isBlankAt(-1, rows), 'at -1').to.be.true
  })
  it('isBlankAt: one square', () => {
    const rows = [...Array(2)].map(() => Row.blank(2))
    rows[0][0] = SquareFilled.from(Direction.Left, Limb.L)
    expect(Row.isBlankAt(0, rows), 'at 0').to.be.false
    expect(Row.isBlankAt(1, rows), 'at 1').to.be.true
    expect(Row.isBlankAt(-2, rows), 'at -2').to.be.false
    expect(Row.isBlankAt(-1, rows), 'at -1').to.be.true
  })
  // it('at', () => {
  //   const rows = [...Array(2)].map(() => Row.blank(2))
  //   // rows[0][0] = SquareFilled.from(Direction.Left, Limb.L, false)
  //   rows[0][1] = SquareFilled.from(Direction.Left, Limb.L)
  //   const top1 = Row.at(0, rows)
  //   expect(SquareBlank.accepts(top1![0]), 'at 00').to.be.true
  //   expect(SquareFilled.accepts(top1![1]), 'at 01').to.be.true
  //   const top2 = Row.at(1, rows)
  //   expect(SquareBlank.accepts(top2![0]), 'at 10').to.be.true
  //   expect(SquareBlank.accepts(top2![1]), 'at 11').to.be.true
  //   const bottom2 = Row.at(-2, rows)
  //   expect(SquareBlank.accepts(bottom2![0]), 'at -20').to.be.true
  //   expect(SquareFilled.accepts(bottom2![1]), 'at -21').to.be.true
  //   const bottom1 = Row.at(-1, rows)
  //   expect(SquareBlank.accepts(bottom1![0]), 'at -10').to.be.true
  //   expect(SquareBlank.accepts(bottom1![1]), 'at -11').to.be.true

  //   const transposed = Matrix.transposed(rows)
  //   const ttop1 = Row.at(0, transposed)
  //   expect(SquareBlank.accepts(ttop1![0]), 'at t00').to.be.true
  //   expect(SquareBlank.accepts(ttop1![1]), 'at t01').to.be.true
  //   const ttop2 = Row.at(1, transposed)
  //   expect(SquareFilled.accepts(ttop2![0]), 'at t10').to.be.true
  //   expect(SquareBlank.accepts(ttop2![1]), 'at t11').to.be.true
  //   const tbottom2 = Row.at(-2, transposed)
  //   expect(SquareBlank.accepts(tbottom2![0]), 'at t-20').to.be.true
  //   expect(SquareBlank.accepts(tbottom2![1]), 'at t-21').to.be.true
  //   const tbottom1 = Row.at(-1, transposed)
  //   expect(SquareFilled.accepts(tbottom1![0]), 'at t-10').to.be.true
  //   expect(SquareBlank.accepts(tbottom1![1]), 'at t-11').to.be.true
  // })
  // it('isBlankAt: in marginor', () => {
  //   const rows = [...Array(2)].map(() => Row.blank(2))
  //   rows[0][0] = SquareFilled.from(Direction.Left, Limb.L, false)

  //   const marginFor = (rows: any[][], outermost: number, secondmost: number): number => {
  //     if (Row.isBlankAt(secondmost, rows)) return 0
  //     if (Row.isBlankAt(outermost, rows)) return 1
  //     return 2
  //   }

  //   expect(marginFor(rows, 0, 1), 'at top').to.equal(2)
  //   expect(marginFor(rows, -1, -2), 'at top').to.equal(2)
  //   expect(marginFor(rows, 0, 1), 'at top').to.equal(2)
  // })
})
