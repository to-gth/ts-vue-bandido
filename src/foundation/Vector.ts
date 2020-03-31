
import ApplicationError from 'ts-application-error'
import Real from 'ts-number/src/Real'
import Direction from './Direction'

type Vector = {
  x: number;
  y: number;
}

namespace Vector {

  export const accepts = (a: any): a is Vector => {
    return !!a
      && Real.admits(a.x)
      && Real.admits(a.y)
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

namespace Vector {

  const xyBy = {
    [Direction.Up]: [0, -1],
    [Direction.Down]: [0, 1],
    [Direction.Left]: [-1, 0],
    [Direction.Right]: [1, 0],
  }
  export const ofUnitFor = (direction: Direction): Vector => {
    const xy = xyBy[direction]
    if (!xy) throw new ApplicationError(`Failed to create xy from: ${ direction }`)
    const [x, y] = xy
    return from(x, y)
  }
}

export default Vector
