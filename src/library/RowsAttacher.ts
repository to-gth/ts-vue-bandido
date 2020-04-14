import ApplicationError from 'ts-application-error';
import Rows from './Rows';
import Row from './Row';
import Address from './Address';
import CardOnBoard from './CardOnBoard';
import SquareFillOnBoardPair from './SquareFillOnBoardPair';
import SquareFillOnBoard from './SquareFillOnBoard';
import Square from './Square';

namespace RowsAttacher {

  export const doingAt = (address: Address, square: Square, rows: Rows): void => {
    const { top, left } = address
    const row = Row.beingAt(top, rows)
    if (!row) throw new ApplicationError(`Failed to get a row at: ${ top }`)
    Row.beingAttachedAt(left, square, row)
  }

  // const doingOf = (addressed: SquareAddressed, rows: Rows): void => {
  //   const { address, squareFill } = addressed
  //   doingAt(address, squareFill, rows)
  // }
  // export const doing = (carded: SquareAddressedCarded, rows: Rows): void => {
  //   doingOf(carded.primary, rows)
  //   doingOf(carded.secondary, rows)
  // }

  export const doingWith = ({ address, squareFill }: SquareFillOnBoard, rows: Rows): void => {
    const { top, left } = address
    const row = Row.beingAt(top, rows)
    if (!row) throw new ApplicationError(`Failed to get a row at: ${ top }`)
    Row.beingAttachedAt(left, squareFill, row)
  }
  export const doing = (cardOnBoard: CardOnBoard, rows: Rows): void => {
    const { primary, secondary } = SquareFillOnBoardPair.fromOf(cardOnBoard)
    doingWith(primary, rows)
    doingWith(secondary, rows)
  }
}

namespace RowsAttacher {

  export const doingFrom = (lefttop: Address, base: any[][], rect: any[][]): any[][] => {
    const { left, top } = lefttop
    rect.forEach((row, i) => {
      const cloned = Row.clonedFrom(row)
      base[top + i].splice(left, cloned.length, ...cloned)
    })
    return base
  }
}
// namespace Attacher {

//   export const doingAt = (address: Address, blank: SquareBlank, rows: Rows): void => {

//     attachingAt(address, blank, rows)
// }

export default RowsAttacher;
