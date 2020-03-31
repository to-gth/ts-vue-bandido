
import Address from './Address'
import Card from './Card';
import SquareAddressed from './SquareAddressed';
import AddressMargins from './MarginsDiagonal';
import Vector from '@/foundation/Vector';

type SquareAddressedCarded = {
  primary: SquareAddressed;
  secondary: SquareAddressed;
};

namespace SquareAddressedCarded {

  const accepts = (a: any): a is SquareAddressedCarded => {
    return !!a
      && SquareAddressed.accepts(a.primary)
      && SquareAddressed.accepts(a.secondary)
  }

  export const from = (primary: SquareAddressed, secondary: SquareAddressed): SquareAddressedCarded => {

    const carded = { primary, secondary };
    if (accepts(carded)) return carded;
    throw new Error(`Failed to create a square-addressed-carded from: ${carded}`);
  };
}

namespace SquareAddressedCarded {

  export const of = (card: Card, address: Address): SquareAddressedCarded => {
    const primary = SquareAddressed.primaryFrom(card, address)
    const secondary = SquareAddressed.secondaryFrom(card, address)
    return { primary, secondary }
  }
}

namespace SquareAddressedCarded {

  export const correctedBy = (margin: Vector, carded: SquareAddressedCarded): SquareAddressedCarded => {

    const offset = Vector.reversed(margin)
    const { primary, secondary } = carded
    const shiftedPrimary = SquareAddressed.shiftedBy(offset, primary)
    const shiftedSecondary = SquareAddressed.shiftedBy(offset, secondary)
    return from(shiftedPrimary, shiftedSecondary)
  }
}

export default SquareAddressedCarded;