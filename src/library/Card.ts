
import Limb from '@/library/Limb'
import Direction from '@/foundation/Direction'

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
    const card = { primary, secondary, direction };
    return card
  };
}

namespace Card {

  // export const first = from(Direction.Right, Limb.L, Limb.HR)
  export const first = (): Card => from(Direction.Right, Limb.L, Limb.HR)
}

export default Card;
