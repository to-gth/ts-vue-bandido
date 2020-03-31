
import Point from '@/foundation/Point'
import Direction from '@/foundation/Direction'
import ApplicationError from 'ts-application-error';
import Rows from './Rows';
import AddressCarded from './AddressCarded';

type Address = Point;

namespace Address {

  export const accepts = Point.accepts
  export const from = Point.from

  export const zero = from(0, 0)
}

namespace Address {

  const diffXY = (direction: Direction): [number, number] => {
    switch (direction) {
      case Direction.Up: return [0, -1]
      case Direction.Down: return [0, 1]
      case Direction.Left: return [-1, 0]
      case Direction.Right: return [1, 0]
      default: throw new ApplicationError(`Failed to create diffXY from: ${ direction }`)
    }
  }
  const diffOf = (direction: Direction): Point => {
    const [left, top] = diffXY(direction)
    return from(left, top)
  }

  export const shiftedBy = Point.shiftedBy

  export const shiftedToNext = (direction: Direction, address: Address): Address => {
    const diff = diffOf(direction)
    return shiftedBy(diff, address)
  }
}

namespace Address {

  export const oppositeOf = (address: Address): Address => {
    const left = -address.left
    const top = -address.top
    return from(left, top)
  }
}

export default Address;
