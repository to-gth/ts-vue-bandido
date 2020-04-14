import ApplicationError from 'ts-application-error';
import Rows from './Rows';
import Matrix from '@/foundation/Matrix';
import Int from 'ts-number/src/Int';
import Address from './Address';
import Card from './Card';
import AddressPair from './AddressPair';
import RowsMargin from './RowsMargin';


// TODO:
// RowsMargin instead of Int

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

  export const fromBy = (rows: Rows): RowsMarginor => {
    const top = RowsMargin.topFor(rows)
    const bottom = RowsMargin.bottomFor(rows)
    const transposed = Matrix.transposed(rows)
    const left = RowsMargin.topFor(transposed)
    const right = RowsMargin.bottomFor(transposed)
    return from(left, top, right, bottom)
  };
}


// TODO:
// emigrate some process to RowsMargin

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
