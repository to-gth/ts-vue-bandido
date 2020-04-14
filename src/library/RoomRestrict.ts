import SquareFilled from './SquareFilled'
import LimbDirection from './LimbDirection'
import SquareRoom from './SquareRoom'
import Direction from '@/foundation/Direction'
import ApplicationError from 'ts-application-error'

enum RoomRestrict {
  Free,
  Open,
  Close,
}

namespace RoomRestrict {

  const all = [
    RoomRestrict.Free,
    RoomRestrict.Open,
    RoomRestrict.Close,
  ]

  export const accepts = (a: any): a is RoomRestrict => {
    return all.includes(a)
  }
}

namespace RoomRestrict {

  export const correspondedFor = (direction: LimbDirection, center: SquareFilled): RoomRestrict => {

    return LimbDirection.isIncludedIn(center, direction)
      ? RoomRestrict.Open
      : RoomRestrict.Close
  }
}

namespace RoomRestrict {

  export const on = (direction: LimbDirection, blank: SquareRoom): RoomRestrict => {

    switch (direction) {
      case Direction.Up: return blank.top
      case Direction.Down: return blank.bottom
      case Direction.Left: return blank.left
      case Direction.Right: return blank.right
      default: throw new ApplicationError(`Failed to return a blank-restrict of: ${ direction }`)
    }
  }
}

namespace RoomRestrict {

  export const namesFrom = ({ left, top, right, bottom }: SquareRoom): string[] => {
    return [
      'left-' + RoomRestrict[left].toLowerCase(),
      'top-' + RoomRestrict[top].toLowerCase(),
      'right-' + RoomRestrict[right].toLowerCase(),
      'bottom-' + RoomRestrict[bottom].toLowerCase(),
    ]
  }
}

export default RoomRestrict;
