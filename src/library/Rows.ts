
import Row from './Row';

type Rows = Row[]

namespace Rows {

  // const admits = (a: any[]): a is Square => {
  //   const some = a.left || a.top || a.right || a.bottom;
  //   return some;
  // };

  // export const from = (): Rows => {
  //   const row = []
  //   if (_admits(square)) return square;
  //   // throw new ApplicationError(`Failed to create a square from: ${ square }`)
  //   throw new Error(`Failed to create a square from: ${square}`);
  // };
}

namespace Rows {

  export const initialized = (): Rows => {

    return from(false, false, false, false)
  }
}

export default Rows;
