
import Square from './Square';
import Rows from './Rows';
import SquareBlank from './SquareBlank';
import ApplicationError from 'ts-application-error';

type Row = Array<Square | SquareBlank>

namespace Row {

  // const accepts = (a: any[]): a is Square => {
  //   const some = a.left || a.top || a.right || a.bottom;
  //   return some;
  // };

  // export const from = (): Row => {
  //   const row = []
  //   if (_accepts(square)) return square;
  //   // throw new ApplicationError(`Failed to create a square from: ${ square }`)
  //   throw new Error(`Failed to create a square from: ${square}`);
  // };
}

namespace Row {

  export const at = (top: number, rows: Rows): Row | null => {
    const row = rows[top]
    return row ? row.slice() : null
  }
}

namespace Row {

  export const clonedFrom = (row: Row): Row => {
    return row.map(Square.clonedFrom)
  }
}

namespace Row {

  export const blank = (length: number): Row => {
    return [...Array(length)].map(SquareBlank.blank)
  }

  const isBlank = (row: Row): boolean => {
    return row.every(SquareBlank.accepts)
  }
  export const isBlankAt = (top: number, rows: Rows): boolean => {
    const row = at(top, rows)
    if (!row) throw new ApplicationError(`Failed to get a row at: ${ top }`)
    return isBlank(row)
  }

}

export default Row;
