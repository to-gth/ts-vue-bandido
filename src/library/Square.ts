
import Rows from './Rows';
import Address from './Address';
import SquareRoom from './SquareRoom';
import SquareFilled from './SquareFilled';
import Row from './Row';

type Square = SquareFilled | SquareRoom

// namespace Square {

//   export const accepts = (a: any): a is Square => {
//     if (!Direction.accepts(a.direction)) return false
//     if (!Limb.accepts(a.limb)) return false
//     return true
//   };

//   export const from = (side: Direction, limb: Limb): Square => {
//     const square = { side, limb };
//     if (accepts(square)) return square;
//     // throw new ApplicationError(`Failed to create a square from: ${ square }`)
//     throw new Error(`Failed to create a square from: ${square}`);
//   };
// }

namespace Square {

  export const clonedFrom = (square: Square): Square => {
    return {...square}
  }
}

namespace Square {

  export const beingAt = (left: number, row: Row): Square | undefined => {
    return row[left]
  }

  export const at = ({ left, top }: Address, rows: Rows): Square | null => {
    const row = Row.beingAt(top, rows)
    if (!row) return null
    const square = beingAt(left, row)
    return square ? clonedFrom(square) : null
  }
}

export default Square;
