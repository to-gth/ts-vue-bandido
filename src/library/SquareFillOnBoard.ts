
import Address from './Address'
import SquareFill from './SquareFill';
import CardOnBoard from './CardOnBoard';

type SquareFillOnBoard = {
  address: Address;
  squareFill: SquareFill;
};

namespace SquareFillOnBoard {

  export const accepts = (a: any): a is SquareFillOnBoard => {
    if (!Address.accepts(a.address)) return false
    if (!SquareFill.accepts(a.squareFill)) return false
    return true
  }

  export const from = (address: Address, squareFill: SquareFill): SquareFillOnBoard => {

    const one = { address, squareFill };
    if (accepts(one)) return one;
    throw new Error(`Failed to create a square-addressed from: ${address}, ${squareFill}`);
  };
}

namespace SquareFillOnBoard {

  // const fromBy = (side: Direction, limb: Limb, address: Address): SquareFillOnBoard => {
  //   const square = SquareFill.from(side, limb)
  //   return from(address, square)
  // }
  export const primaryFrom = ({ card, address }: CardOnBoard): SquareFillOnBoard => {
    const squareFill = SquareFill.primaryFrom(card)
    return from(address, squareFill)
  }
  export const secondaryFrom = ({ card, address }: CardOnBoard): SquareFillOnBoard => {
    const squareFill = SquareFill.secondaryFrom(card)
    const shifted = Address.shiftedToNext(card.direction, address)
    return from(shifted, squareFill)
  }
}

// namespace SquareFillOnBoard {

//   export const shiftedBy = (diff: Vector, { address, squareFill }: SquareFillOnBoard): SquareFillOnBoard => {
//     const shifted = Address.shiftedBy(diff, address)
//     return from(shifted, squareFill)
//   }
// }

export default SquareFillOnBoard;
