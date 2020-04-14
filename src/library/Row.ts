
import Square from './Square';
import Rows from './Rows';
import SquareRoom from './SquareRoom';
import ApplicationError from 'ts-application-error';

type Row = Array<Square | SquareRoom>

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

  export const clonedFrom = (row: Row): Row => {
    return row.map(Square.clonedFrom)
  }
}

namespace Row {

  export const beingAt = (top: number, rows: Rows): Row | undefined => {
    return rows[top]
  }

  export const circularlyAt = (top: number, rows: Rows): Row | null => {
    const row = rows.slice(top)[0]
    // return row || null
    return row ? clonedFrom(row) : null
  }
}

namespace Row {

  export const blank = (length: number): Row => {
    return [...Array(length)].map(SquareRoom.blank)
  }

  const isBlank = (row: Row): boolean => {
    return row.every(SquareRoom.accepts)
  }
  export const isBlankAt = (top: number, rows: Rows): boolean => {
    const row = circularlyAt(top, rows)
    if (!row) throw new ApplicationError(`Failed to get a row at: ${ top }`)
    return isBlank(row)
  }

}

namespace Row {

  export const beingAttachedAt = (left: number, square: Square, row: Row): void => {
    if (!Square.beingAt(left, row)) throw new ApplicationError(`Failed to get a square at ${left} from: ${row}`)
    row[left] = Square.clonedFrom(square)
  }
}

export default Row;
