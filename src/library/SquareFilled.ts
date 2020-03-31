
import Direction from '@/foundation/Direction';
import Limb from './Limb';
import ApplicationError from 'ts-application-error';

type SquareFilled = {
  side: Direction;
  limb: Limb;
};

namespace SquareFilled {

  export const accepts = (a: any): a is SquareFilled => {
    return true
      && Direction.accepts(a.direction)
      && Limb.accepts(a.limb)
  };

  export const from = (side: Direction, limb: Limb): SquareFilled => {
    const square = { side, limb };
    if (accepts(square)) return square;
    throw new ApplicationError(`Failed to create a square from: ${ square }`)
  };
}

export default SquareFilled;
