
import Tetrimino from '@/libraries/Tetrimino'
import Size from '@/libraries/Size'
import C from '@/libraries/C'
import R from '@/libraries/R'
import TetriminoType from '@/libraries/TetriminoType'
import Rows from '@/libraries/Rows'
import Direction from './Direction'

type Origin = {
  left: number
  top: number
}

namespace Origin {
  export const initializedBy = (type: TetriminoType): Origin => {
    const left = (type === TetriminoType.O) ? 4 : 3
    const top = 4
    return { left, top }
  }
}

namespace Origin {
  const correctedLeftOf = ({ left = 0 }: Origin, width: number): number => {
    const cSize = C.size
    if (left < 0) left = 0
    if (left + width > cSize) left = cSize - width
    return left
  }
  const correctedTopOf = ({ top = 0 }: Origin, height: number): number => {
    const rSize = R.size
    if (top < 0) top = 0
    if (top + height > rSize) top = rSize - height
    return top
  }
  export const correctedInsideField = (
    origin: Origin,
    tetrimino: Tetrimino
  ): Origin => {
    const { width, height } = Size.from(tetrimino)
    const left = correctedLeftOf(origin, width)
    const top = correctedTopOf(origin, height)
    return { left, top }
  }
}

namespace Origin {
  export const topOfShadowed = (
    tetrimino: Tetrimino,
    { left, top }: Origin,
    field: Rows
  ): number => {
    const bottoms = R.bottomsOf(tetrimino, top)
    const roofs = R.roofsUnder(bottoms, left, field)
    const distances = roofs.map((roof, c) => roof - 1 - bottoms[c])
    const min = Math.min(...distances)
    return top + min
  }
}

// namespace Origin {
//   export type Diff = Origin
// }

namespace Origin {
  export const moved = (
    origin: Origin,
    diff: { left?: number, top?: number }
  ): Origin => {
    const left = origin.left + (diff.left || 0)
    const top = origin.top + (diff.top || 0)
    return { left, top }
  }
}

// namespace Origin {
//   const leftDiffs = new Map<Direction.Turns, number>([
//     [Direction.Turns.none, 0],
//     [Direction.Turns.clockwise, 1],
//     [Direction.Turns.anticlockwise, -1],
//   ])

//   export const assistedFor = (
//     turns: Direction.Turns,
//     origin: Origin
//   ): Origin => {
//     const left = leftDiffs.get(turns) || 0
//     const top = 0
//     const diff = { left, top }
//     const assisted = moved(origin, diff)
//     return assisted
//   }
// }

namespace Origin {
  export const assistedLeftwardly = (origin: Origin, leftDiff: number): Origin => {
    const left = -leftDiff
    const assisted = moved(origin, { left })
    return assisted
  }
  export const assistedRightwardly = (origin: Origin, rightDiff: number): Origin => {
    const assisted = assistedLeftwardly(origin, -rightDiff)
    return assisted
  }
  export const assistedUpwardly = (origin: Origin, topDiff: number): Origin => {
    const top = -topDiff
    const assisted = moved(origin, { top })
    return assisted
  }
}

namespace Origin {

  const from = (left: number, top: number): Origin => {
    return { left, top } as Origin
  }

  const diffOf = (direction: Direction): Origin => {

    if (direction === Direction.Up) return from(0, -1)
    if (direction === Direction.Down) return from(0, 1)
    if (direction === Direction.Left) return from(-1, 0)
    return from(1, 0)
  }

  const shiftedBy = (diff: Origin, point: Origin): Origin => {
    const shifted = from(point.left + diff.left, point.top + diff.top)
    return shifted
  }

  export const shiftedToNext = (direction: Direction, point: Origin): Origin => {
    const diff = diffOf(direction)
    const shifted = shiftedBy(diff, point)
    return shifted
  }
}

export default Origin
