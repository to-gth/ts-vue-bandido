
import ApplicationError from 'ts-application-error'
import { Int } from 'ts-number'
import Point from './Point'

type Diagonal = {
  lefttop: Point,
  rightbottom: Point,
}

namespace Diagonal {

  export const accepts = (a: any): a is Diagonal => {
    return true
      && Int.accepts(a.left)
      && Int.accepts(a.top)
  }

  export const from = (left: number, top: number): Diagonal => {
    const point = { left, top }
    if (accepts(point)) return point
    throw new ApplicationError(`Failed to create a point from: ${left}, ${top}`)
  }

  export const shiftedBy = (diff: Diagonal, point: Diagonal): Diagonal => {
    const left = point.left + diff.left
    const top = point.top + diff.top
    return from(left, top)
  }
}

namespace Diagonal {

  export const outermostIn = ({ primary, secondary }: AddressCarded, rows: Rows): { lefttop: Address, rightbottom: Address } => {

    const lefts = [primary.left, secondary.left]
    const tops = [primary.top, secondary.top]

    const minLeft = Math.min(...lefts, 0)
    const minTop = Math.min(...tops, 0)
    const lefttop = Address.from(minLeft, minTop)

    const maxLeft = Math.max(...lefts, Rows.widthOf(rows))
    const maxTop = Math.max(...tops, Rows.heightOf(rows))
    const rightbottom = Address.from(maxLeft, maxTop)

    return { lefttop, rightbottom }
  }

  export const outermostOf = ({ primary, secondary }: AddressCarded): { lefttop: Address, rightbottom: Address } => {

    const lefts = [primary.left, secondary.left]
    const tops = [primary.top, secondary.top]

    const minLeft = Math.min(...lefts, 0)
    const minTop = Math.min(...tops, 0)
    const lefttop = Address.from(minLeft, minTop)

    const maxLeft = Math.max(...lefts, Rows.widthOf(rows))
    const maxTop = Math.max(...tops, Rows.heightOf(rows))
    const rightbottom = Address.from(maxLeft, maxTop)

    return { lefttop, rightbottom }
  }
}

export default Diagonal

  // export const moved = (
  //   point: Point,
  //   diff: { left?: number, top?: number }
  // ): Point => {
  //   const left = point.left + (diff.left || 0)
  //   const top = point.top + (diff.top || 0)
  //   return { left, top }
  // }