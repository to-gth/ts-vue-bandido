
import Direction from '@/foundation/Direction';
import BlankRestrict from './BlankRestrict';

type SquareBlank = {
  left: BlankRestrict;
  top: BlankRestrict;
  right: BlankRestrict;
  bottom: BlankRestrict;
};

namespace SquareBlank {

  export const accepts = (a: any): a is SquareBlank => {
    return !!a
      && BlankRestrict.accepts(a.left)
      && BlankRestrict.accepts(a.top)
      && BlankRestrict.accepts(a.right)
      && BlankRestrict.accepts(a.bottom)
  };

  // export const from = (
  //   left: boolean,
  //   top: boolean,
  //   right: boolean,
  //   bottom: boolean
  // ): Square => {
  //   const square = { left, top, right, bottom };
  //   if (_accepts(square)) return square;
  //   // throw new ApplicationError(`Failed to create a square from: ${ square }`)
  //   throw new Error(`Failed to create a square from: ${square}`);
  // };

  export const blank = (): SquareBlank => {
    const left = BlankRestrict.Free
    const top = BlankRestrict.Free
    const right = BlankRestrict.Free
    const bottom = BlankRestrict.Free
    const square = { left, top, right, bottom };
    return square
  }
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

  export const overwrittenOn = (direction: Direction, restrict: BlankRestrict, blank: SquareBlank): SquareBlank => {
    const directionName = directionNameFor(direction)
    return {...blank, [directionName]: restrict}
  }
  // export const freeAddedOn = (direction: Direction, square: SquareBlank): SquareBlank => {
  //   const name = directionNameFor(direction)
  //   return overwrittenOn(name, BlankRestrict.Free, square)
  // }
  // export const openAddedOn = (direction: Direction, square: SquareBlank): SquareBlank => {
  //   const name = directionNameFor(direction)
  //   return overwrittenOn(name, BlankRestrict.Open, square)
  // }
  // export const closeAddedOn = (direction: Direction, square: SquareBlank): SquareBlank => {
  //   const name = directionNameFor(direction)
  //   return overwrittenOn(name, BlankRestrict.Close, square)
  // }
}

export default SquareBlank;
