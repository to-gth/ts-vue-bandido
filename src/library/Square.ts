
import Direction from '@/foundation/Direction';
import Limb from './Limb';

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

  const _admits = (a: any): a is Square => {
    if (!Direction.admits(a.direction)) return false
    if (!Limb.admits(a.limb)) return false
    return true
  };

  export const from = (side: Direction, limb: Limb): Square => {
    const square = { side, limb };
    if (_admits(square)) return square;
    // throw new ApplicationError(`Failed to create a square from: ${ square }`)
    throw new Error(`Failed to create a square from: ${square}`);
  };
}

namespace Square {

  // export const asBlank = (): Square => {

  //   return from(false, false, false, false)
  // }
}

export default Square;
