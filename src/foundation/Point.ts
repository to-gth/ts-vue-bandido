
import Direction from './Direction'
import ApplicationError from 'ts-application-error'

import { Int } from 'ts-number'


type Point = {
  left: Int
  top: Int
}

namespace Point {

  export const admits = (a: any): a is Point => {
    return true
      && Int.admits(a.left)
      && Int.admits(a.top)
  }

  export const from = (left: number, top: number): Point => {
    const point = { left, top }
    if (admits(point)) return point
    throw new ApplicationError(`Failed to create a point from: ${left}, ${top}`)
  }

  // export const moved = (
  //   point: Point,
  //   diff: { left?: number, top?: number }
  // ): Point => {
  //   const left = point.left + (diff.left || 0)
  //   const top = point.top + (diff.top || 0)
  //   return { left, top }
  // }

  export const shiftedBy = (diff: Point, point: Point): Point => {
    const left = point.left + diff.left
    const top = point.top + diff.top
    return from(left, top)
  }
}

namespace Point {

  const diffXY = (direction: Direction): [number, number] => {
    switch (direction) {
      case Direction.Up: return [0, -1]
      case Direction.Down: return [0, 1]
      case Direction.Left: return [-1, 0]
      case Direction.Right: return [1, 0]
      default: throw new ApplicationError(`Failed to create diffXY from: ${ direction }`)
    }
  }
  const diffOf = (direction: Direction): Point => {
    const [left, top] = diffXY(direction)
    return from(left, top)
  }

  export const shiftedToNext = (direction: Direction, point: Point): Point => {
    const diff = diffOf(direction)
    return shiftedBy(diff, point)
  }
}

export default Point
