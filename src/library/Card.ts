
import Direction from '@/foundation/Direction';
import Limb from '@/library/Limb';

type Card = {
  direction: Direction;
  primary: Limb;
  secondary: Limb;
};

namespace Card {

  export const from = (
    direction: Direction,
    primary: Limb,
    secondary: Limb,
  ): Card => {
    const card = { direction, primary, secondary };
    return card
  };
}

namespace Card {

  // export const first = from(Direction.Right, Limb.L, Limb.HR)
  export const first = (): Card => {
    return from(Direction.Right, Limb.L, Limb.HR)
  }
}

export default Card;
