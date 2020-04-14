
import Direction from '@/foundation/Direction';
import CardType from './CardType';

type Card = {
  direction: Direction;
  // primary: Limb;
  // secondary: Limb;
  type: CardType;
};

namespace Card {

  export const from = (
    direction: Direction,
    // primary: Limb,
    // secondary: Limb,
    type: CardType,
  ): Card => {
    const one = { direction, type };
    return one
  };
}

namespace Card {

  export const first = from(Direction.Left, CardType.HRxL)
  // export const first = (): Card => {
  //   return from(Direction.Left, CardType.HRxL)
  // }
}

export default Card;
