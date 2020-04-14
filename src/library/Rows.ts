
import Row from './Row';
import Address from './Address';
import Card from './Card';
// import SquareAddressedCarded from './SquareAddressedCarded';
// import Int from 'ts-number/src/Int';
import RowsMarginor from './RowsMarginor';
import RowsMarginer from './RowsMarginer';
import RowsFillabler from './RowsFillabler';
import RowsAttacher from './RowsAttacher';
import Matrix from '@/foundation/Matrix';
import ApplicationError from 'ts-application-error';
import CardOnBoard from './CardOnBoard';
import RowsMargin from './RowsMargin';

type Rows = Row[]

namespace Rows {

  // TODO
  // accepts() should also check if it margined
  // const accepts = (a: any): a is Rows => {}

// namespace Rows {


//   export const from = (): Rows => {
//     const row = []
//     if (_accepts(square)) return square;
//     // throw new ApplicationError(`Failed to create a square from: ${ square }`)
//     throw new Error(`Failed to create a square from: ${square}`);
//   };
// }

  export const margin = 2

  export const accepts = (a: Row[]): a is Rows => {
    return !!a
      && a.length >= margin
      && a[0].length >= margin
      && Matrix.accepts(a)
      && RowsMargin.isEnough(a)
  }

  export const blank = (width: number = margin, height: number = margin): Rows => {
    if (width < margin) width = margin
    if (height < margin) height = margin
    const rows = [...Array(height)].fill(width).map(Row.blank)
    if (accepts(rows)) return rows
    throw new ApplicationError(`Failed to create a rows from: ${width}, ${height}`)
  }
}

namespace Rows {

  // const blankFrom = (marginor: RowsMarginor, rows: Rows): Rows => {
  //   const size = Matrix.sizeOf(rows)
  //   const { left, top, right, bottom } = marginor
  //   const width = Int.from(left + size.width + right)
  //   const height = Int.from(top + size.height + bottom)
  //   return Matrix.from(width, height)
  // }

  // const expandedBy = (marginor: RowsMarginor, rows: Rows): Rows => {
  //   const expanded = blankFrom(marginor, rows)
  //   const offset = Address.from(marginor.left, marginor.top)
  //   return Attacher.doingFrom(offset, expanded, rows)
  // }

  const clonedFrom = (rows: Rows): Rows => {
    const cloned = rows.map(Row.clonedFrom)
    if (accepts(cloned)) return cloned
    throw new ApplicationError(`Failed to a clone from: ${ rows }`)
  }

  export const cardAttachedAt = (address: Address, card: Card, rows: Rows): Rows => {

    // const carded = SquareAddressedCarded.of(card, address)
    // const cloned = clonedFrom(rows)
    // RowsAttacher.doing(carded, cloned)

    // const marginor = RowsMarginor.fromBy(cloned)
    // RowsMarginer.doing(cloned, marginor)

    // const corrected = SquareAddressedCarded.correctedWith(marginor, carded)
    // RowsFillabler.doing(cloned, corrected)


    const onboard = CardOnBoard.from(card, address)
    const cloned = clonedFrom(rows)
    RowsAttacher.doing(onboard, cloned)

    const marginor = RowsMarginor.fromBy(cloned)
    RowsMarginer.doing(cloned, marginor)

    const corrected = CardOnBoard.correctedWith(marginor, onboard)
    RowsFillabler.doing(cloned, corrected)

    return cloned
  }
}

namespace Rows {

  export const initialized = (): Rows => {

    const card = Card.first
    const address = Address.first
    const rows = blank()
    return cardAttachedAt(address, card, rows)
  }
}

export default Rows;
