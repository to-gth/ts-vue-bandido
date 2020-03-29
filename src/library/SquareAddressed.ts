
import Address from './Address'
import Square from './Square';
import Card from './Card';

type SquareAddressed = {
  address: Address;
  square: Square;
};

namespace SquareAddressed {

  const _admits = (a: any): a is SquareAddressed => {
    return true
      && Address.admits(a.address)
      && Square.admits(a.square)
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
