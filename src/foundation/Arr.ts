import Int from 'ts-number/src/Int'
import Point from './Point'

export namespace Arr {

  export const isRectangle = (arr: any[][]): boolean => {
    const set = new Set(arr.map(row => row.length))
    return set.size <= 1
  }

  export const rectangleOf = (width: Int, height: Int): any[][] => {
    return [...Array(height)].map(() => [...Array(width)])
  }

  export const pastedAt = (leftTop: Point, base: any[][], rect: any[][]): any[][] => {
    const { left, top } = leftTop
    rect.forEach((row, i) => {
      base[top + i].splice(left, row.length, ...row)
    })
    return base
  }
}

export default Arr
