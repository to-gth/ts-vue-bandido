
import Address from './Address'
import Square from './Square';
import Card from './Card';
import Direction from '@/foundation/Direction';
import Limb from './Limb';
import SquareFilled from './SquareFilled';

type SquareAddressed = {
  address: Address;
  squareFilled: SquareFilled;
};

namespace SquareAddressed {

  const _admits = (a: any): a is SquareAddressed => {
    return !!a
      && Address.admits(a.address)
      && SquareFilled.admits(a.square)
  }

  export const from = (address: Address, square: Square): SquareAddressed => {

    const addressed = { address, square };
    if (_admits(addressed)) return addressed;
    throw new Error(`Failed to create a square-addressed from: ${addressed}`);
  };
}

namespace SquareAddressed {

  const _from = (limb: Limb, address: Address, side: Direction): SquareAddressed => {
    const square = SquareFilled.from(side, limb)
    return from(address, square)
  }
  const primaryFrom = (limb: Limb, address: Address, cardDirection: Direction): SquareAddressed => {
    const side = Direction.oppositeOf(cardDirection)
    return _from(limb, address, side)
  }
  const secondaryFrom = (limb: Limb, address: Address, cardDirection: Direction): SquareAddressed => {
    const nextAddress = Address.shiftedToNext(cardDirection, address)
    return _from(limb, nextAddress, cardDirection)
  }

  export const primaryAndSecondaryFrom = (card: Card, address: Address): { primary: SquareAddressed, secondary: SquareAddressed } => {
    
    const primary = primaryFrom(card.primary, address, card.direction)
    const secondary = secondaryFrom(card.secondary, address, card.direction)
    return { primary, secondary }
  }
}

export default SquareAddressed;
