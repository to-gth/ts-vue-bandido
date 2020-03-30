
import Direction from '@/foundation/Direction';
import Limb from './Limb';
import ApplicationError from 'ts-application-error';

type SquareFilled = {
  side: Direction;
  limb: Limb;
};

namespace SquareFilled {

  export const admits = (a: any): a is SquareFilled => {
    return true
      && Direction.admits(a.direction)
      && Limb.admits(a.limb)
  };

  export const from = (side: Direction, limb: Limb): SquareFilled => {
    const square = { side, limb };
    if (admits(square)) return square;
    throw new ApplicationError(`Failed to create a square from: ${ square }`)
  };
}

export default SquareFilled;
