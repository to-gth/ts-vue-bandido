import Int from 'ts-number/src/Int'
import Point from './Point'

type Matrix = any[][]

namespace Matrix {

  const isRectangle = (a: any[][]): boolean => {
    const set = new Set(a.map(row => row.length))
    return set.size <= 1
  }
  export const accepts = (a: any[][]): a is Matrix => {
    return isRectangle(a)
  }

  export const from = (width: Int, height: Int): Matrix => {
    return [...Array(height)].map(() => [...Array(width)])
  }
}

namespace Matrix {

  export const pastedAt = (leftTop: Point, base: any[][], rect: any[][]): any[][] => {
    const { left, top } = leftTop
    rect.forEach((row, i) => {
      base[top + i].splice(left, row.length, ...row)
    })
    return base
  }
}

export default Matrix
