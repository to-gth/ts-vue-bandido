
import Limb from '@/library/Limb'
import Direction from '@/foundation/Direction'
import Deadlocks from './Deadlocks';

type Card = {
  direction: Direction;
  primary: Limb;
  secondary: Limb;
  deadlocks: Deadlocks;
};

namespace Card {

  export const from = (
    direction: Direction,
    primary: Limb,
    secondary: Limb,
    deadlocks: Deadlocks,
  ): Card => {
    const card = { direction, primary, secondary, deadlocks };
    return card
  };
}

namespace Card {

  // export const first = from(Direction.Right, Limb.L, Limb.HR)
  export const first = (): Card => {
    return from(Direction.Right, Limb.L, Limb.HR, Deadlocks.None)
  }
}

export default Card;
