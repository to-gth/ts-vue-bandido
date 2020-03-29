
// import TetriminoType from '@/libraries/TetriminoType'

enum Restrict {
  Free,
  Open,
  Close,
}

type SquareBlankFillable = {
  left: Restrict;
  top: Restrict;
  right: Restrict;
  bottom: Restrict;
};

namespace Square {

  // const _admits = (a: {
  //   left: boolean;
  //   top: boolean;
  //   right: boolean;
  //   bottom: boolean;
  // }): a is Square => {
  //   const some = a.left || a.top || a.right || a.bottom;
  //   return some;
  // };

  // export const from = (
  //   left: boolean,
  //   top: boolean,
  //   right: boolean,
  //   bottom: boolean
  // ): Square => {
  //   const square = { left, top, right, bottom };
  //   if (_admits(square)) return square;
  //   // throw new ApplicationError(`Failed to create a square from: ${ square }`)
  //   throw new Error(`Failed to create a square from: ${square}`);
  // };
}

namespace SquareBlankFillable {
}

export default SquareBlankFillable;
