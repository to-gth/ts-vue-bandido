import Size from './Size'

type Matrix = any[][]

namespace Matrix {

  const isRectangle = (a: any[][]): boolean => {
    const set = new Set(a.map(row => row.length))
    return set.size <= 1
  }
  export const accepts = (a: any[][]): a is Matrix => {
    return isRectangle(a)
  }

  export const from = (width: number, height: number): Matrix => {
    return [...Array(height)].map(() => [...Array(width)])
  }
}

namespace Matrix {

  export const sizeOf = (matrix: Matrix): Size => {
    const width = matrix[0].length
    const height = matrix.length
    return Size.from(width, height)
  }
}

namespace Matrix {

  const rowAt = <T>(r: number, columns: T[][]): T[] => {
    const row = columns.map((column: T[]): T => column[r])
    return row
  }

  export const transposed = <T>(columns: T[][]): T[][] => {
    const rows = columns[0].map((_, r): T[] => rowAt(r, columns))
    return rows
  }
}

export default Matrix
