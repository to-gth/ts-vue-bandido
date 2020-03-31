
import Address from './Address'
import Square from './Square';
import Card from './Card';
import Direction from '@/foundation/Direction';
import Limb from './Limb';
import SquareFilled from './SquareFilled';
import Point from '@/foundation/Point';
import Vector from '@/foundation/Vector';

type SquareAddressed = {
  address: Address;
  squareFilled: SquareFilled;
};

namespace SquareAddressed {

  export const accepts = (a: any): a is SquareAddressed => {
    return !!a
      && Address.accepts(a.address)
      && SquareFilled.accepts(a.square)
  }

  export const from = (address: Address, filled: SquareFilled): SquareAddressed => {

    const one = { address, filled };
    if (accepts(one)) return one;
    throw new Error(`Failed to create a square-addressed from: ${one}`);
  };
}

namespace SquareAddressed {

  const _from = (limb: Limb, address: Address, side: Direction): SquareAddressed => {
    const square = SquareFilled.from(side, limb)
    return from(address, square)
  }
  export const primaryFrom = (card: Card, address: Address): SquareAddressed => {
    const limb = card.primary
    const direction = card.direction
    const opposite = Direction.oppositeOf(direction)
    return _from(limb, address, opposite)
  }
  export const secondaryFrom = (card: Card, address: Address): SquareAddressed => {
    const limb = card.secondary
    const side = card.direction
    const shifted = Address.shiftedToNext(side, address)
    return _from(limb, shifted, side)
  }
}

namespace SquareAddressed {

  export const shiftedBy = (diff: Vector, { address, squareFilled }: SquareAddressed): SquareAddressed => {
    const shifted = Address.shiftedBy(diff, address)
    return from(shifted, squareFilled)
  }
}

export default SquareAddressed;
