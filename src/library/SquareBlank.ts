
import Direction from '@/foundation/Direction';
import BlankRestrict from './BlankRestrict';

type SquareBlank = {
  left: BlankRestrict;
  top: BlankRestrict;
  right: BlankRestrict;
  bottom: BlankRestrict;
};

namespace SquareBlank {

  export const admits = (a: any): a is SquareBlank => {
    return !!a
      && BlankRestrict.admits(a.left)
      && BlankRestrict.admits(a.top)
      && BlankRestrict.admits(a.right)
      && BlankRestrict.admits(a.bottom)
  };

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

namespace SquareBlank {

  const directionNames = {
    [Direction.Up]: 'top',
    [Direction.Down]: 'bottom',
    [Direction.Left]: 'left',
    [Direction.Right]: 'right',
  }
  const directionNameFor = (direction: Direction): string => {
    return directionNames[direction]
  }

  export const overwrittenOn = (directionName: string, restrict: BlankRestrict, square: SquareBlank): SquareBlank => {
    return {...square, [directionName]: restrict}
  }
  export const FreeAddedOn = (direction: Direction, square: SquareBlank): SquareBlank => {
    const name = directionNameFor(direction)
    return overwrittenOn(name, BlankRestrict.Free, square)
  }
  export const OpenAddedOn = (direction: Direction, square: SquareBlank): SquareBlank => {
    const name = directionNameFor(direction)
    return overwrittenOn(name, BlankRestrict.Open, square)
  }
  export const CloseAddedOn = (direction: Direction, square: SquareBlank): SquareBlank => {
    const name = directionNameFor(direction)
    return overwrittenOn(name, BlankRestrict.Close, square)
  }
}

export default SquareBlank;
