
import Address from './Address'
import Card from './Card';
import Vector from '@/foundation/Vector';
import RowsMarginor from './RowsMarginor';

type CardOnBoard = {
  card: Card;
  address: Address;
};

namespace CardOnBoard {

  export const from = (card: Card, address: Address): CardOnBoard => {

    const one = { card, address };
    return one
  };
}

namespace CardOnBoard {

  // export const correctedBy = (marginor: RowsMarginor, carded: CardOnBoard): CardOnBoard => {

  //   const { left, top } = marginor
  //   const offset = Vector.from(-left, -top)
  //   const { primary, secondary } = carded

  //   const shiftedPrimary = SquareAddressed.shiftedBy(offset, primary)
  //   const shiftedSecondary = SquareAddressed.shiftedBy(offset, secondary)
  //   return from(shiftedPrimary, shiftedSecondary)
  // }

  export const correctedWith = (marginor: RowsMarginor, cardOnBoard: CardOnBoard): CardOnBoard => {

    const offset = Vector.from(marginor.left, marginor.top)
    const { card, address } = cardOnBoard
    const shifted = Address.shiftedBy(offset, address)
    return from(card, shifted)
  }
}

export default CardOnBoard;
