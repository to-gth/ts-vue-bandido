import ApplicationError from 'ts-application-error';
import Rows from './Rows';
import Row from './Row';
import SquareAddressedCarded from './SquareAddressedCarded';
import SquareAddressed from './SquareAddressed';
import Address from './Address';
import Square from './Square';

namespace RowsAttacher {

  export const doingAt = (address: Address, square: Square, rows: Rows): void => {
    const { top, left } = address
    const row = Row.at(top, rows)
    if (!row) throw new ApplicationError(`Failed to get a row at: ${ top }`)
    const clone = {...square}
    row[left] = clone
  }

  const doingOf = (addressed: SquareAddressed, rows: Rows): void => {
    const { address, squareFilled } = addressed
    doingAt(address, squareFilled, rows)
  }
  export const doing = (carded: SquareAddressedCarded, rows: Rows): void => {
    doingOf(carded.primary, rows)
    doingOf(carded.secondary, rows)
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
