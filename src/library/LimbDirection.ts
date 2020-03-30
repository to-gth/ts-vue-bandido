import Direction from '@/foundation/Direction'
import Limb from './Limb'
import SquareFilled from './SquareFilled'
import Limbor from './Limbor'
import Turn from '@/foundation/Turn'

type LimbDirection = Direction

namespace LimbDirection {

  const turnsBy = {
    [Limbor.L]: Turn.anticlockwise,
    [Limbor.H]: Turn.none,
    [Limbor.R]: Turn.clockwise,
  }
  const turnFor = (limbor: Limbor): Turn => turnsBy[limbor]

  const from = (limbor: Limbor, side: Direction): LimbDirection => {
    const turn = turnFor(limbor)
    return Direction.turned(side, turn)
  }

  export const sFrom = (square: SquareFilled): Direction[] => {
    const { side, limb } = square
    const directions = Limbor.all
      .filter(limbor => Limb.has(limbor, limb))
      .map(limbor => from(limbor, side))
    return directions
  }

  export const sAllFrom = (side: Direction): Direction[] => {
    return Limbor.all.map(limbor => from(limbor, side))
  }
}

namespace LimbDirection {

  export const isIncludedIn = (square: SquareFilled, direction: Direction): boolean => {
    sFrom(square).includes(direction)
  }
}

export default LimbDirection;
