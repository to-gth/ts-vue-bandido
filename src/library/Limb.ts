import Direction from '@/foundation/Direction'

enum Limb {
  L,
  H,
  R,
  LH,
  LR,
  HR,
  LHR,
}

namespace Limb {

  const all = [
    Limb.L,
    Limb.H,
    Limb.R,
    Limb.LH,
    Limb.LR,
    Limb.HR,
    Limb.LHR,
  ]

  export const admits = (a: any): a is Limb => {

    return  all.includes(a)
  }
}

namespace Limb {

  const hasL = (limb: Limb): boolean => {
    switch (limb) {
      case Limb.H:
      case Limb.R:
      case Limb.HR: return false
      default: return true
    }
  }
  const hasH = (limb: Limb): boolean => {
    switch (limb) {
      case Limb.L:
      case Limb.R:
      case Limb.LR: return false
      default: return true
    }
  }
  const hasR = (limb: Limb): boolean => {
    switch (limb) {
      case Limb.L:
      case Limb.H:
      case Limb.LH: return false
      default: return true
    }
  }

  const _directionOfLIn = (side: Direction): Direction => Direction.anticlockwised(side)
  const _directionOfHIn = (side: Direction): Direction => Direction.oppositeOf(side)
  const _directionOfRIn = (side: Direction): Direction => Direction.clockwised(side)

  export const directionsOf = (limb: Limb, side: Direction): Direction[] => {
    const directions: Direction[] = []
    if (hasL(limb)) directions.push(_directionOfLIn(side))
    if (hasH(limb)) directions.push(_directionOfHIn(side))
    if (hasR(limb)) directions.push(_directionOfRIn(side))
  }
}

export default Limb;
