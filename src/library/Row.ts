
import Square from './Square';
import Card from './Card';

type Row = Square[]

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

  export const initialized1 = (): Row => {

    const first = Card.first()
    const squares = Square.sFrom
    return from(false, false, false, false)
  }

  export const initialized1 = (): Row => {

    return from(false, false, false, false)
  }
}

export default Row;
