
import Address from '@/foundation/Point'
import Square from './Square';
import Card from './Card';

type SquareAddressed = {
  address: Address;
  Square: Square;
};

namespace SquareAddressed {

  export const _admits = (a: any): a is SquareAddressed => {

    if(!Address.admits(a.address)) return false
    if(!Square.admits(a.square)) return false
    return true
  }

  export const from = (address: Address, square: Square): SquareAddressed => {

    const addressed = { address, square };
    if (_admits(addressed)) return addressed;
    throw new Error(`Failed to create a square-addressed from: ${addressed}`);
  };
}

namespace SquareAddressed {

  export const primaryAndSecondaryFrom = (card: Card, address: Address): { primary: SquareAddressed, secondary: SquareAddressed } => {
    
    const shiftedAddress = Address.shiftedToNext(card.direction, address)
    const primary = from(address, card.leftOne)
    const secondary = from(shiftedAddress, card.rightOne)
    return { primary, secondary }
  }
}

export default SquareAddressed;
