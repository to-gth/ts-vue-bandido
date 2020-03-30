
import Point from '@/foundation/Point'
import Direction from '@/foundation/Direction'
import ApplicationError from 'ts-application-error';
import Rows from './Rows';

type Address = Point;

namespace Address {

  export const admits = Point.admits
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

  export const outermostIn = (rows: Rows, primary: Address, secondary: Address): { leftTop: Address, rightBottom: Address } => {

    const lefts = [primary.left, secondary.left]
    const tops = [primary.top, secondary.top]

    const minLeft = Math.min(...lefts, 0)
    const minTop = Math.min(...tops, 0)
    const leftTop = Address.from(minLeft, minTop)

    const maxLeft = Math.max(...lefts, Rows.widthOf(rows))
    const maxTop = Math.max(...tops, Rows.heightOf(rows))
    const rightBottom = Address.from(maxLeft, maxTop)

    return { leftTop, rightBottom }
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
