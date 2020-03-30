import Turn from "./Turn"
import ApplicationError from "ts-application-error"

enum Direction {
  Up,
  Right,
  Down,
  Left,
}

namespace Direction {

  export const all = [
    Direction.Up,
    Direction.Right,
    Direction.Down,
    Direction.Left,
  ]

  const size = all.length

  export const admits = (n: number): n is Direction => {
    return all.includes(n)
  }

  const _from = (n: number): Direction => {
    if (admits(n)) return n
    throw new ApplicationError(`Failed to create a Direction from: ${ n }`)
  }

  const _corrected = (n: number): Direction => {
    const corrected = (n + size) % size
    return _from(corrected)
  }

  export const turned = (direction: Direction, turn: Turn): Direction => {
    const turned = direction + turn
    return _corrected(turned)
  }
}

namespace Direction {

  export const clockwised = (direction: Direction): Direction => {
    return turned(direction, Turn.clockwise)
  }
  export const anticlockwised = (direction: Direction): Direction => {
    return turned(direction, Turn.anticlockwise)
  }
  export const oppositeOf = (direction: Direction): Direction => {
    return turned(direction, Turn.opposite)
  }
}

namespace Direction {

  export const isVertical = (direction: Direction): boolean => {
    switch (direction) {
      case Direction.Up:
      case Direction.Down: return true
      default: return false
    }
  }
  // export const isHorizontal = (direction: Direction) => {
  //   return (direction === Direction.left) ? true
  //     : (direction === Direction.right) ? true
  //     : false
  // }
}

export default Direction