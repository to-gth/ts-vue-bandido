
import Direction from '@/foundation/Direction';
import RoomRestrict from './RoomRestrict';

type SquareRoom = {
  left: RoomRestrict;
  top: RoomRestrict;
  right: RoomRestrict;
  bottom: RoomRestrict;
};

namespace SquareRoom {

  export const accepts = (a: any): a is SquareRoom => {
    return !!a
      && RoomRestrict.accepts(a.left)
      && RoomRestrict.accepts(a.top)
      && RoomRestrict.accepts(a.right)
      && RoomRestrict.accepts(a.bottom)
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

  export const blank = (): SquareRoom => {
    const left = RoomRestrict.Free
    const top = RoomRestrict.Free
    const right = RoomRestrict.Free
    const bottom = RoomRestrict.Free
    const square = { left, top, right, bottom };
    return square
  }
}

namespace SquareRoom {

  const directionNames = {
    [Direction.Up]: 'top',
    [Direction.Down]: 'bottom',
    [Direction.Left]: 'left',
    [Direction.Right]: 'right',
  }
  const directionNameFor = (direction: Direction): string => {
    return directionNames[direction]
  }

  export const overwrittenOn = (direction: Direction, restrict: RoomRestrict, blank: SquareRoom): SquareRoom => {
    const directionName = directionNameFor(direction)
    return {...blank, [directionName]: restrict}
  }
  // export const freeAddedOn = (direction: Direction, square: SquareRoom): SquareRoom => {
  //   const name = directionNameFor(direction)
  //   return overwrittenOn(name, RoomRestrict.Free, square)
  // }
  // export const openAddedOn = (direction: Direction, square: SquareRoom): SquareRoom => {
  //   const name = directionNameFor(direction)
  //   return overwrittenOn(name, RoomRestrict.Open, square)
  // }
  // export const closeAddedOn = (direction: Direction, square: SquareBlank): SquareBlank => {
  //   const name = directionNameFor(direction)
  //   return overwrittenOn(name, RoomRestrict.Close, square)
  // }
}

export default SquareRoom;
