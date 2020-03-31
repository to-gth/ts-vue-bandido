
import Row from './Row';
import Address from './Address';
import Card from './Card';
import SquareAddressed from './SquareAddressed';
import SquareAddressedCarded from './SquareAddressedCarded';
import Arr from '@/foundation/Matrix';
import Int from 'ts-number/src/Int';
import ApplicationError from 'ts-application-error';
import MarginsDiagonal from './MarginsDiagonal';
import Marginor from './Marginor';
import Marginer from './Marginer';
import Fillabler from './Fillabler';

type Rows = Row[]

namespace Rows {

  // const accepts = (a: Row[]): a is Rows => {
  //   return true
  //     && a.length >= 1
  //     && Arr.isRectangle(a)
  // };

  // export const from = (): Rows => {
  //   const row = []
  //   if (_accepts(square)) return square;
  //   // throw new ApplicationError(`Failed to create a square from: ${ square }`)
  //   throw new Error(`Failed to create a square from: ${square}`);
  // };
}

namespace Rows {

  const blankFrom = (margins: MarginsDiagonal): Rows => {
    const { lefttop, rightbottom } = margins
    const width = Int.from(rightbottom.x - lefttop.x)
    const height = Int.from(rightBottom.top - leftTop.top)
    return Arr.rectangleOf(width, height)
  }

  const expandedBy = (margins: MarginsDiagonal, rows: Rows): Rows => {
    const extended = blankFrom(margins)
    const diff = Address.oppositeOf(leftTop)
    return Arr.pastedAt(diff, extended, rows)
  }

  const attaching = (addressed: SquareAddressed, rows: Rows): void => {
    const { address, squareFilled } = addressed
    const { left, top } = address
    const row = Row.at(top, rows)
    if (!row) throw new ApplicationError(`Failed to get a row at: ${ top }`)
    row[left] = squareFilled
  }

  export const cardAttachedAt = (address: Address, card: Card, rows: Rows): Rows => {

    const margins = MarginsDiagonal.by(card, address, rows)

    const expanded = expandedBy(margins, rows)

    const carded = SquareAddressedCarded.of(card, address)
    const corrected = SquareAddressedCarded.correctedBy(margins.lefttop, carded)
    attaching(corrected.primary, expanded)
    attaching(corrected.secondary, expanded)

    const marginor = Marginor.fromBy(expanded)
    Marginer.doing(expanded, marginor)

    const recorrected = SquareAddressedCarded.correctedWith(marginor, corrected)
    Fillabler.doing(expanded, recorrected)

    return expanded
  }
}

namespace Rows {

  export const blank = (width: number, height: number): Rows => {
    return [...Array(height)].fill(width).map(Row.blank)
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
