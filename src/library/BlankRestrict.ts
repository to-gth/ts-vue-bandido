import SquareFilled from './SquareFilled'
import LimbDirection from './LimbDirection'

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

  export const whichFor = (direction: LimbDirection, center: SquareFilled): BlankRestrict => {

    return LimbDirection.isIncludedIn(center, direction)
      ? BlankRestrict.Open
      : BlankRestrict.Close
  }
}

export default BlankRestrict;
