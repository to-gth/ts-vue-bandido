
import Direction from '@/foundation/Direction';
import Limb from './Limb';
import Rows from './Rows';
import Address from './Address';

// type Square = {
//   left: boolean;
//   top: boolean;
//   right: boolean;
//   bottom: boolean;
// };


type Square = {
  side: Direction;
  limb: Limb;
};

namespace Square {

  export const admits = (a: any): a is Square => {
    if (!Direction.admits(a.direction)) return false
    if (!Limb.admits(a.limb)) return false
    return true
  };

  export const from = (side: Direction, limb: Limb): Square => {
    const square = { side, limb };
    if (admits(square)) return square;
    // throw new ApplicationError(`Failed to create a square from: ${ square }`)
    throw new Error(`Failed to create a square from: ${square}`);
  };
}

namespace Square {

  export const at = ({ left, top }: Address, rows: Rows): Square => {
    return rows[top][left]
  }

  export const isBlankAt = (address: Address, rows: Rows): boolean => {
    return !at(address, rows)
  }
}

export default Square;
