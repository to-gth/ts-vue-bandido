
import Address from './Address'
import Card from './Card';
import Direction from '@/foundation/Direction';
import Limb from './Limb';
import SquareFilled from './SquareFilled';
import Vector from '@/foundation/Vector';
import Deadlocks from './Deadlocks';

type SquareAddressed = {
  address: Address;
  squareFilled: SquareFilled;
};

namespace SquareAddressed {

  export const accepts = (a: any): a is SquareAddressed => {
    if (!Address.accepts(a.address)) return false
    if (!SquareFilled.accepts(a.squareFilled)) return false
    return true
  }

  export const from = (address: Address, squareFilled: SquareFilled): SquareAddressed => {

    const one = { address, squareFilled };
    if (accepts(one)) return one;
    throw new Error(`Failed to create a square-addressed from: ${address}, ${squareFilled}`);
  };
}

namespace SquareAddressed {

  const fromBy = (side: Direction, limb: Limb, deadlocks: boolean, address: Address): SquareAddressed => {
    const square = SquareFilled.from(side, limb, deadlocks)
    return from(address, square)
  }
  export const primaryFrom = (card: Card, address: Address): SquareAddressed => {
    const limb = card.primary
    const direction = card.direction
    const opposite = Direction.oppositeOf(direction)
    const deadlocks = Deadlocks.onPrimaryOf(card)
    return fromBy(opposite, limb, deadlocks, address)
  }
  export const secondaryFrom = (card: Card, address: Address): SquareAddressed => {
    const limb = card.secondary
    const side = card.direction
    const shifted = Address.shiftedToNext(side, address)
    const deadlocks = Deadlocks.onSecondaryOf(card)
    return fromBy(side, limb, deadlocks, shifted)
  }
}

namespace SquareAddressed {

  export const shiftedBy = (diff: Vector, { address, squareFilled }: SquareAddressed): SquareAddressed => {
    const shifted = Address.shiftedBy(diff, address)
    return from(shifted, squareFilled)
  }
}

export default SquareAddressed;
