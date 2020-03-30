
import Square from './Square';
import Rows from './Rows';
import SquareBlank from './SquareBlank';

type Row = Array<Square | SquareBlank>

namespace Row {

  // const admits = (a: any[]): a is Square => {
  //   const some = a.left || a.top || a.right || a.bottom;
  //   return some;
  // };

  // export const from = (): Row => {
  //   const row = []
  //   if (_admits(square)) return square;
  //   // throw new ApplicationError(`Failed to create a square from: ${ square }`)
  //   throw new Error(`Failed to create a square from: ${square}`);
  // };
}

namespace Row {

  const at = (top: number, rows: Rows): Row => {
    return (rows[top] || []).slice()
  }

  export const attachedOf = (squareAddressed: SquareAddressed, rows: Rows): Row => {

    const { left, top } =  squareAddressed.address.point
    const row = (rows[top] || []).slice()
    row[left] = squareAddressed
    return row
  }
}

namespace Row {

  export const blank = (): Row => []

  export const isBlank = (row: Row): boolean => {
    row.every((square) => {
      Square.isBlank(square)
    })
  }

}

export default Row;
