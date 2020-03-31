import ApplicationError from 'ts-application-error';
import Rows from './Rows';
import Row from './Row';
import Matrix from '@/foundation/Matrix';
import Int from 'ts-number/src/Int';
import Address from './Address';
import Card from './Card';
import AddressCarded from './AddressCarded';

type Marginor = {
  left: Int;
  top: Int;
  right: Int;
  bottom: Int;
};

namespace Marginor {

  const accepts = (a: any): a is Marginor => {
    return !!a
      && Int.admits(a.left)
      && Int.admits(a.top)
      && Int.admits(a.right)
      && Int.admits(a.bottom)
      && a.left <= 0
      && a.top <= 0
  }

  export const from = (left: number, top: number, right: number, bottom: number): Marginor => {
    const one = { left, top, right, bottom }
    if (accepts(one)) return one
    throw new ApplicationError(`Failed to create an marginor from: ${ one }`)
  }
}

namespace Marginor {

  const marginFor = (rows: Rows, outermost: number, secondmost: number): number => {
    return Row.isBlankAt(secondmost, rows) ? 0
     : Row.isBlankAt(outermost, rows) ? 1
     : 2
  }
  const topFor = (rows: Rows): number => {
    return marginFor(rows, 0, 1)
  }
  const bottomFor = (rows: Rows): number => {
    return marginFor(rows, -1, -2)
  }
  export const fromBy = (rows: Rows): Marginor => {
    const top = topFor(rows)
    const bottom = bottomFor(rows)
    const transposed = Matrix.transposed(rows)
    const left = topFor(transposed)
    const right = bottomFor(transposed)
    return from(left, top, right, bottom)
  };
}

namespace Marginor {

  export const fromWith = (card: Card, address: Address, rows: Rows): Marginor => {

    const carded = AddressCarded.from(card, address)
    const { primary, secondary } = carded

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

export default Marginor;
