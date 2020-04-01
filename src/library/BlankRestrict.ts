import SquareFilled from './SquareFilled'
import LimbDirection from './LimbDirection'
import SquareBlank from './SquareBlank'
import Direction from '@/foundation/Direction'
import ApplicationError from 'ts-application-error'

enum BlankRestrict {
  Free,
  Open,
  Close,
}

namespace BlankRestrict {

  const all = [
    BlankRestrict.Free,
    BlankRestrict.Open,
    BlankRestrict.Close,
  ]

  export const accepts = (a: any): a is BlankRestrict => {
    return all.includes(a)
  }
}

namespace BlankRestrict {

  export const correspondedFor = (direction: LimbDirection, center: SquareFilled): BlankRestrict => {

    return LimbDirection.isIncludedIn(center, direction)
      ? BlankRestrict.Open
      : BlankRestrict.Close
  }
}

namespace BlankRestrict {

  export const on = (direction: LimbDirection, blank: SquareBlank): BlankRestrict => {

    switch (direction) {
      case Direction.Up: return blank.top
      case Direction.Down: return blank.bottom
      case Direction.Left: return blank.left
      case Direction.Right: return blank.right
      default: throw new ApplicationError(`Failed to return a blank-restrict of: ${ direction }`)
    }
  }
}

export default BlankRestrict;
