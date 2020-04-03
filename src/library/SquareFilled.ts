
import Direction from '@/foundation/Direction';
import Limb from './Limb';
import ApplicationError from 'ts-application-error';
import CardType from './CardType';

type SquareFilled = {
  side: Direction;
  limb: Limb;
};

namespace SquareFilled {

  export const accepts = (a: any): a is SquareFilled => {
    if (!a) return false
    if (!Direction.accepts(a.side)) return false
    if (!Limb.accepts(a.limb)) return false
    return true
  };

  export const from = (side: Direction, limb: Limb): SquareFilled => {
    const square = { side, limb };
    if (accepts(square)) return square;
    throw new ApplicationError(`Failed to create a square from: ${side}, ${limb}`)
  };
}

namespace SquareFilled {

  // TODO
  // refactor with SquareAddressed

  export const sFrom = (cardType: CardType): SquareFilled[] => {

    const primary = Limb.primaryOf(cardType)
    const secondary = Limb.secondaryOf(cardType)
    return [
      from(Direction.Left, primary),
      from(Direction.Right, secondary),
    ]
  }
}

export default SquareFilled;
