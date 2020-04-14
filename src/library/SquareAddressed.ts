
// import Address from './Address'
// import Card from './Card';
// import Direction from '@/foundation/Direction';
// import Limb from './Limb';
// import SquareFill from './SquareFill';
// import Vector from '@/foundation/Vector';

// type SquareAddressed = {
//   address: Address;
//   squareFill: SquareFill;
// };

// namespace SquareAddressed {

//   export const accepts = (a: any): a is SquareAddressed => {
//     if (!Address.accepts(a.address)) return false
//     if (!SquareFill.accepts(a.squareFill)) return false
//     return true
//   }

//   export const from = (address: Address, squareFill: SquareFill): SquareAddressed => {

//     const one = { address, squareFill };
//     if (accepts(one)) return one;
//     throw new Error(`Failed to create a square-addressed from: ${address}, ${squareFill}`);
//   };
// }

// namespace SquareAddressed {

//   const fromBy = (side: Direction, limb: Limb, address: Address): SquareAddressed => {
//     const square = SquareFill.from(side, limb)
//     return from(address, square)
//   }
//   export const primaryFrom = (card: Card, address: Address): SquareAddressed => {
//     const limb = card.primary
//     const direction = card.direction
//     const opposite = Direction.oppositeOf(direction)
//     return fromBy(opposite, limb, address)
//   }
//   export const secondaryFrom = (card: Card, address: Address): SquareAddressed => {
//     const limb = card.secondary
//     const side = card.direction
//     const shifted = Address.shiftedToNext(side, address)
//     return fromBy(side, limb, shifted)
//   }
// }

// namespace SquareAddressed {

//   export const shiftedBy = (diff: Vector, { address, squareFill }: SquareAddressed): SquareAddressed => {
//     const shifted = Address.shiftedBy(diff, address)
//     return from(shifted, squareFill)
//   }
// }

// export default SquareAddressed;
