
import Point from '@/foundation/Point'
import Direction from '@/foundation/Direction'
import Vector from '@/foundation/Vector';

type Address = Point;

namespace Address {

  export const accepts = Point.accepts
  export const from = Point.from

  export const zero = from(0, 0)
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

export default Address;
