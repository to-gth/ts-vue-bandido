
import Direction from '@/foundation/Direction';
import Limb from './Limb';
import ApplicationError from 'ts-application-error';

type SquareFilled = {
  side: Direction;
  limb: Limb;
  deadlocks: boolean;
};

namespace SquareFilled {

  export const accepts = (a: any): a is SquareFilled => {
    return !!a
      && Direction.accepts(a.side)
      && Limb.accepts(a.limb)
      && (typeof a.deadlocks) === 'boolean'
  };

  export const from = (side: Direction, limb: Limb, deadlocks: boolean): SquareFilled => {
    const square = { side, limb, deadlocks };
    if (accepts(square)) return square;
    throw new ApplicationError(`Failed to create a square from: ${side}, ${limb}, ${deadlocks}`)
  };
}

export default SquareFilled;
