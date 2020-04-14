
import SquareFillOnBoard from './SquareFillOnBoard';
import CardOnBoard from './CardOnBoard';

type SquareFillOnBoardPair = {
  primary: SquareFillOnBoard;
  secondary: SquareFillOnBoard;
};

namespace SquareFillOnBoardPair {

  const accepts = (a: any): a is SquareFillOnBoardPair => {
    return !!a
      && SquareFillOnBoard.accepts(a.primary)
      && SquareFillOnBoard.accepts(a.secondary)
  }

  export const from = (primary: SquareFillOnBoard, secondary: SquareFillOnBoard): SquareFillOnBoardPair => {

    const carded = { primary, secondary };
    if (accepts(carded)) return carded;
    throw new Error(`Failed to create a square-addressed-carded from: ${carded}`);
  };
}

namespace SquareFillOnBoardPair {

  // export const of = (card: Card, address: Address): SquareFillOnBoardPair => {
  export const fromOf = (cardOnBoard: CardOnBoard): SquareFillOnBoardPair => {
    const primary = SquareFillOnBoard.primaryFrom(cardOnBoard)
    const secondary = SquareFillOnBoard.secondaryFrom(cardOnBoard)
    return { primary, secondary }
  }
}

// namespace SquareFillOnBoardPair {

//   export const correctedBy = (marginor: RowsMarginor, carded: SquareFillOnBoardPair): SquareFillOnBoardPair => {

//     const { left, top } = marginor
//     const offset = Vector.from(-left, -top)
//     const { primary, secondary } = carded

//     const shiftedPrimary = SquareFillOnBoard.shiftedBy(offset, primary)
//     const shiftedSecondary = SquareFillOnBoard.shiftedBy(offset, secondary)
//     return from(shiftedPrimary, shiftedSecondary)
//   }

//   export const correctedWith = (marginor: RowsMarginor, carded: SquareFillOnBoardPair): SquareFillOnBoardPair => {

//     const offset = Vector.from(marginor.left, marginor.top)
//     const { primary, secondary } = carded
//     const shiftedPrimary = SquareFillOnBoard.shiftedBy(offset, primary)
//     const shiftedSecondary = SquareFillOnBoard.shiftedBy(offset, secondary)
//     return from(shiftedPrimary, shiftedSecondary)
//   }
// }

export default SquareFillOnBoardPair;
