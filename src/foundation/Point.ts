
import ApplicationError from 'ts-application-error'
import { Int } from 'ts-number'
import Vector from './Vector'
import Real from 'ts-number/src/Real'


Real.admits
type Point = {
  left: Int
  top: Int
}

namespace Point {

  export const accepts = (a: any): a is Point => {
    return true
      && Int.admits(a.left)
      && Int.admits(a.top)
  }

  export const from = (left: number, top: number): Point => {
    const point = { left, top }
    if (accepts(point)) return point
    throw new ApplicationError(`Failed to create a point from: ${left}, ${top}`)
  }

  export const shiftedBy = (diff: Vector, point: Point): Point => {
    const left = point.left + diff.x
    const top = point.top + diff.y
    return from(left, top)
  }
}

export default Point
