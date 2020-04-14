import ApplicationError from 'ts-application-error';
import Rows from './Rows';
import Row from './Row';
import RowsMarginor from './RowsMarginor';

type RowsMargin = 0 | 1 | 2

namespace RowsMargin {

  const accepts = (a: number): a is RowsMargin => {
    switch (a) {
      case 0: case 1: case 2: return true
      default: return false
    }
  }
  const from = (n: number): RowsMargin => {
    if (accepts(n)) return n
    throw new ApplicationError(`Failed to create a rows-margin from: ${n}`)
  }
  const fromFor = (rows: Rows, outermost: number, secondmost: number): RowsMargin => {
    if (!Row.isBlankAt(outermost, rows)) return from(2)
    if (!Row.isBlankAt(secondmost, rows)) return from(1)
    return from(0)
  }

  export const topFor = (rows: Rows): number => {
    return fromFor(rows, 0, 1)
  }
  export const bottomFor = (rows: Rows): number => {
    return fromFor(rows, -1, -2)
  }
}

namespace RowsMargin {

  export const isEnough = (a: Row[]): boolean => {
    const { left, top, right, bottom } = RowsMarginor.fromBy(a)
    return left + top + right + bottom === 0
  }
}
export default RowsMargin;
