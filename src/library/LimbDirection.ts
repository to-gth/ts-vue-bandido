import Direction from '@/foundation/Direction'
import Limb from './Limb'
import SquareFill from './SquareFill'
import Limbor from './Limbor'
import Turn from '@/foundation/Turn'
import ApplicationError from 'ts-application-error'
import SquareRoom from './SquareRoom'
import RoomRestrict from './RoomRestrict'

type LimbDirection = Direction

namespace LimbDirection {

  const turnsBy = {
    [Limbor.L]: Turn.anticlockwise,
    [Limbor.H]: Turn.none,
    [Limbor.R]: Turn.clockwise,
    [Limbor.D]: Turn.opposite,
  }
  const turnFor = (limbor: Limbor): Turn => turnsBy[limbor]

  const from = (limbor: Limbor, side: Direction): LimbDirection => {
    const turn = turnFor(limbor)
    return Direction.turned(side, turn)
  }

  export const sFrom = (square: SquareFill): Direction[] => {
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

  export const isIncludedIn = (square: SquareFill, direction: Direction): boolean => {
    return sFrom(square).includes(direction)
  }
}

namespace LimbDirection {

  export const nameFor = (side: Direction): string => {
    const name = Direction[side]
    if (name) return name
    throw new ApplicationError(`Failed to get a limb-direction-name for: ${ side }`)
  }
}

namespace LimbDirection {

  const is = (restrict: RoomRestrict, direction: LimbDirection, squareRoom: SquareRoom): boolean => {
    const one = RoomRestrict.on(direction, squareRoom)
    return one === restrict
  }
  const sRestrictedFrom = (squareRoom: SquareRoom, restrict: RoomRestrict): LimbDirection[] => {
    return Direction.all.filter((direction) => is(restrict, direction, squareRoom))
  }

  export const sOpenFrom = (squareRoom: SquareRoom): LimbDirection[] => {
    return sRestrictedFrom(squareRoom, RoomRestrict.Open)
  }

  export const sCloseFrom = (squareRoom: SquareRoom): LimbDirection[] => {
    return sRestrictedFrom(squareRoom, RoomRestrict.Close)
  }
}

namespace LimbDirection {

  export const sIncludedIn = (squareFill: SquareFill): LimbDirection[] => {
    return Direction.all.filter((direction) => isIncludedIn(squareFill, direction))
  }

  // export const sPrimaryFrom = (card: Card): LimbDirection[] => {
  //   const squareFill = SquareFill.primaryFrom(card)
  //   return sIncludedIn(squareFill)
  // }

  // export const sSecondaryFrom = (card: Card): LimbDirection[] => {
  //   const squareFill = SquareFill.secondaryFrom(card)
  //   return sIncludedIn(squareFill)
  // }
}

export default LimbDirection;
