
import Point from '@/foundation/Point'
import Direction from '@/foundation/Direction'
import Vector from '@/foundation/Vector';
import CardOnBoard from './CardOnBoard';
import Rows from './Rows';
import Matrix from '@/foundation/Matrix';

type Address = Point;

namespace Address {

  export const accepts = Point.accepts
  export const from = Point.from

  export const zero = from(0, 0)
  export const first = from(0, 0)
}

namespace Address {

  export const shiftedBy = Point.shiftedBy

  export const shiftedToNext = (direction: Direction, address: Address): Address => {
    const offset = Vector.ofUnitFor(direction)
    return shiftedBy(offset, address)
  }
}

namespace Address {

  export const oppositeOf = (address: Address): Address => {
    const left = -address.left
    const top = -address.top
    return from(left, top)
  }
}

namespace Address {

  export const primaryFrom = (cardOnBoard: CardOnBoard): Address => {
    return cardOnBoard.address
  }
  export const secondaryFrom = ({ card, address }: CardOnBoard): Address => {
    const side = card.direction
    return shiftedToNext(side, address)
  }
}

namespace Address {

  // TODO:
  // Address should have positive value always?

  export const isWithin = (rows: Rows, { left, top }: Address): boolean => {
    if (left < 0) return false
    if (top < 0) return false
    const { width, height } = Matrix.sizeOf(rows)
    if (left >= width) return false
    if (top >= height) return false
    return true
  }
}

export default Address;
