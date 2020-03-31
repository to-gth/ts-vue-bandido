
import Direction from './Direction'
import ApplicationError from 'ts-application-error'

import { Int } from 'ts-number'


type Point = {
  left: Int
  top: Int
}

namespace Point {

  export const accepts = (a: any): a is Point => {
    return true
      && Int.accepts(a.left)
      && Int.accepts(a.top)
  }

  export const from = (left: number, top: number): Point => {
    const point = { left, top }
    if (accepts(point)) return point
    throw new ApplicationError(`Failed to create a point from: ${left}, ${top}`)
  }

  export const shiftedBy = (diff: Point, point: Point): Point => {
    const left = point.left + diff.left
    const top = point.top + diff.top
    return from(left, top)
  }
}

export default Point

  // export const moved = (
  //   point: Point,
  //   diff: { left?: number, top?: number }
  // ): Point => {
  //   const left = point.left + (diff.left || 0)
  //   const top = point.top + (diff.top || 0)
  //   return { left, top }
  // }