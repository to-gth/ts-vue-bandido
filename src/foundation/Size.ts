
import ApplicationError from 'ts-application-error'
import { Int } from 'ts-number'


type Size = {
  width: Int
  height: Int
}

namespace Size {

  export const accepts = (a: any): a is Size => {
    return !!a
      && Int.admits(a.width)
      && Int.admits(a.height)
  }

  export const from = (width: number, height: number): Size => {
    const size = { width, height }
    if (accepts(size)) return size
    throw new ApplicationError(`Failed to create a size from: ${width}, ${height}`)
  }
}

export default Size
