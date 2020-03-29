
import Row from './Row';
import Address from './Address';
import Card from './Card';
import SquareAddressed from './SquareAddressed';
import Arr from '@/foundation/Arr';

type Rows = Row[]

namespace Rows {

  const admits = (a: Row[]): a is Rows => {
    return Arr.isRectangle(a)
  };

  // export const from = (): Rows => {
  //   const row = []
  //   if (_admits(square)) return square;
  //   // throw new ApplicationError(`Failed to create a square from: ${ square }`)
  //   throw new Error(`Failed to create a square from: ${square}`);
  // };
}

namespace Rows {

  const attachedAt = (address: Address, card: Card, rows: Rows): Rows => {

    const { primary, secondary } = SquareAddressed.primaryAndSecondaryFrom(card, address)

    const outermostNew = Address.outermostOf(primary.address, secondary.address)
    const outermostPresent = Address.outermostIn(rows)
    const outermost = Address.outermostOf(outermostNew, outermostPresent)
    outermost.


    const rowPrimary = Row.attachedOf(primary, rows)
    const rowSecondary  = Row.attachedOf(secondary, rows)


  }
}

namespace Rows {

  const blank = (): Rows => []

  export const initialized = (): Rows => {


    // return from(false, false, false, false)
  }
}

export default Rows;
