import ApplicationError from 'ts-application-error';
import Rows from './Rows';
import Row from './Row';
import Matrix from '@/foundation/Matrix';
import Int from 'ts-number/src/Int';
import Address from './Address';
import Card from './Card';
import AddressPair from './AddressPair';

type RowsMarginor = {
  left: Int;
  top: Int;
  right: Int;
  bottom: Int;
};

namespace RowsMarginor {

  const accepts = (a: any): a is RowsMarginor => {
    if (!Int.admits(a.left)) return false
    if (!Int.admits(a.top)) return false
    if (!Int.admits(a.right)) return false
    if (!Int.admits(a.bottom)) return false
    return true
  }

  export const from = (left: number, top: number, right: number, bottom: number): RowsMarginor => {
    const one = { left, top, right, bottom }
    if (accepts(one)) return one
    throw new ApplicationError(`Failed to create an marginor from: ${left}, ${top}, ${right}, ${bottom}`)
  }
}

namespace RowsMarginor {

  const marginFor = (rows: Rows, outermost: number, secondmost: number): number => {
    if (!Row.isBlankAt(outermost, rows)) return 2
    if (!Row.isBlankAt(secondmost, rows)) return 1
    return 0
  }
  const topFor = (rows: Rows): number => {
    return marginFor(rows, 0, 1)
  }
  const bottomFor = (rows: Rows): number => {
    return marginFor(rows, -1, -2)
  }
  export const fromBy = (rows: Rows): RowsMarginor => {
    const top = topFor(rows)
    const bottom = bottomFor(rows)
    const transposed = Matrix.transposed(rows)
    const left = topFor(transposed)
    const right = bottomFor(transposed)
    return from(left, top, right, bottom)
  };
}

namespace RowsMarginor {

  export const fromWith = (card: Card, address: Address, rows: Rows): RowsMarginor => {

    const { primary, secondary } = AddressPair.from(card, address)

    const lefts = [primary.left, secondary.left]
    const tops = [primary.top, secondary.top]

    const left = Math.min(...lefts, 0)
    const top = Math.min(...tops, 0)

    const { width, height } = Matrix.sizeOf(rows)
    const right = Math.max(...lefts, width) - width
    const bottom = Math.max(...tops, height) - height

    return from(left, top, right, bottom)
  };
}

export default RowsMarginor;
