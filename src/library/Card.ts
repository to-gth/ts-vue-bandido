
import Direction from '@/foundation/Direction';
import CardType from './CardType';
import SquareRoom from './SquareRoom';
import LimbDirection from './LimbDirection';
import SquareFill from './SquareFill';

type Card = {
  direction: Direction;
  type: CardType;
};

namespace Card {

  export const from = (
    direction: Direction,
    type: CardType,
  ): Card => {
    const one = { direction, type };
    return one
  };

  export const first = from(Direction.Right, CardType.LHRxLHR)
}

namespace Card {

  const isOk = (squareRoom: SquareRoom, squareFill: SquareFill): boolean => {

    const roomOpens = LimbDirection.sOpenFrom(squareRoom)
    const roomCloses = LimbDirection.sCloseFrom(squareRoom)
    const fillDirections = LimbDirection.sIncludedIn(squareFill)

    // TODO:
    // refactor with lodash

    const a = roomOpens.every((openDirection) => {
      return fillDirections.includes(openDirection)
    })
    const b = fillDirections.every((fillDirection) => {
      return !roomCloses.includes(fillDirection)
    })
    return a && b
  }

  export const isAttachableIn = (primary: SquareRoom, secondary: SquareRoom, card: Card): boolean => {

    const primaryFill = SquareFill.primaryFrom(card)
    const primaryIsOk = isOk(primary, primaryFill)
    if (!primaryIsOk) return false
    const secondaryFill = SquareFill.secondaryFrom(card)
    const secondaryIsOk = isOk(secondary, secondaryFill)
    if (!secondaryIsOk) return false

    if (LimbDirection.sOpenFrom(primary).length
      + LimbDirection.sOpenFrom(secondary).length === 0) return false

    return true
  }
}

export default Card;
