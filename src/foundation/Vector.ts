
import ApplicationError from 'ts-application-error'

type Vector = {
  x: number
  y: number
}

namespace Vector {

  const isNumber = (n: any): boolean => {
      return typeof(n) === 'number'
  }

  export const accepts = (a: any): a is Vector => {
    return !!a
      && isNumber(a.x)
      && isNumber(a.x)
  }

  export const from = (x: number, y: number): Vector => {
    const one = { x, y }
    if (accepts(one)) return one
    throw new ApplicationError(`Failed to create a vector from {x, y}: {${x}, ${y}}`)
  }
}

namespace Vector {

  export const reversed = (vector: Vector): Vector => {
    const x = -vector.x
    const y = -vector.y
    return from(x, y)
  }
}

export default Vector
