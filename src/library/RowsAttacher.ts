import ApplicationError from 'ts-application-error';
import Rows from './Rows';
import Row from './Row';
// import SquareAddressedCarded from './SquareAddressedCarded';
// import SquareAddressed from './SquareAddressed';
import Address from './Address';
import Square from './Square';
import CardOnBoard from './CardOnBoard';
import SquareFill from './SquareFill';

namespace RowsAttacher {

  export const doingAt = (address: Address, square: Square, rows: Rows): void => {
    const { top, left } = address
    const row = Row.beingAt(top, rows)
    if (!row) throw new ApplicationError(`Failed to get a row at: ${ top }`)
    // const clone = {...square}
    // row[left] = clone
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
  export const doing = (cardOnBoard: CardOnBoard, rows: Rows): void => {

    const [fillPrimary, fillSecondary] = SquareFill.sOf(cardOnBoard)
    const addressPrimary = Address.primaryFrom(cardOnBoard)
    const addressSecondary = Address.secondaryFrom(cardOnBoard)
    doingAt(addressPrimary, fillPrimary, rows)
    doingAt(addressSecondary, fillSecondary, rows)
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
