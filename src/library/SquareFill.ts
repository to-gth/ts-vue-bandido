
import Direction from '@/foundation/Direction';
import Limb from './Limb';
import ApplicationError from 'ts-application-error';
import CardType from './CardType';
import CardOnBoard from './CardOnBoard';

type SquareFill = {
  side: Direction;
  limb: Limb;
};

namespace SquareFill {

  export const accepts = (a: any): a is SquareFill => {
    if (!a) return false
    if (!Direction.accepts(a.side)) return false
    if (!Limb.accepts(a.limb)) return false
    return true
  };

  export const from = (side: Direction, limb: Limb): SquareFill => {
    const square = { side, limb };
    if (accepts(square)) return square;
    throw new ApplicationError(`Failed to create a square from: ${side}, ${limb}`)
  };
}

namespace SquareFill {

  // TODO
  // refactor with SquareAddressed

  export const sFrom = (cardType: CardType, direction: Direction = Direction.Right): SquareFill[] => {

    const opposite = Direction.oppositeOf(direction)
    const primary = Limb.primaryOf(cardType)
    const secondary = Limb.secondaryOf(cardType)
    return [
      from(opposite, primary),
      from(direction, secondary),
    ]
  }
}

namespace SquareFill {

  export const sOf = (cardOnBoard: CardOnBoard): SquareFill[] => {
    const { direction, type } = cardOnBoard.card
    return sFrom(type, direction)
  }
}

export default SquareFill;
