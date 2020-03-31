
import Row from './Row';
import Address from './Address';
import Card from './Card';
import SquareAddressedCarded from './SquareAddressedCarded';
import Int from 'ts-number/src/Int';
import Marginor from './Marginor';
import Marginer from './Marginer';
import Fillabler from './Fillabler';
import Attacher from './Attacher';
import Matrix from '@/foundation/Matrix';

type Rows = Row[]

namespace Rows {

  // TODO
  // accepts() should also check if it margined
  // const accepts = (a: any): a is Rows => {}
  // const clonedFrom = (a: any): a is Rows => {}

// namespace Rows {

//   const accepts = (a: Row[]): a is Rows => {
//     return true
//       && a.length >= 1
//       && Arr.isRectangle(a)
//   };

//   export const from = (): Rows => {
//     const row = []
//     if (_accepts(square)) return square;
//     // throw new ApplicationError(`Failed to create a square from: ${ square }`)
//     throw new Error(`Failed to create a square from: ${square}`);
//   };
// }

  export const blank = (width: number, height: number): Rows => {
    return [...Array(height)].fill(width).map(Row.blank)
  }
}

namespace Rows {

  const blankFrom = (marginor: Marginor, rows: Rows): Rows => {
    const size = Matrix.sizeOf(rows)
    const { left, top, right, bottom } = marginor
    const width = Int.from(left + size.width + right)
    const height = Int.from(top + size.height + bottom)
    return Matrix.from(width, height)
  }

  const expandedBy = (marginor: Marginor, rows: Rows): Rows => {
    const expanded = blankFrom(marginor, rows)
    const offset = Address.from(marginor.left, marginor.top)
    return Attacher.doingFrom(offset, expanded, rows)
  }

  export const cardAttachedAt = (address: Address, card: Card, rows: Rows): Rows => {

    // vvv unneeded ? vvv
    const marginor = Marginor.fromWith(card, address, rows)

    const expanded = expandedBy(marginor, rows)

    const carded = SquareAddressedCarded.of(card, address)
    const corrected = SquareAddressedCarded.correctedBy(marginor, carded)
    // ^^^ unneeded ? ^^^^

    Attacher.doing(corrected, expanded)

    const marginorr = Marginor.fromBy(expanded)
    Marginer.doing(expanded, marginorr)

    const recorrected = SquareAddressedCarded.correctedWith(marginorr, corrected)
    Fillabler.doing(expanded, recorrected)

    return expanded
  }
}

namespace Rows {

  export const initialized = (): Rows => {

    const card = Card.first()
    const address = Address.zero
    const rows = blank(0, 0)
    return cardAttachedAt(address, card, rows)
  }
}

export default Rows;
