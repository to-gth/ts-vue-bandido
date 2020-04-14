import Rows from './Rows';
// import SquareAddressedCarded from './SquareAddressedCarded';
// import SquareAddressed from './SquareAddressed';
import LimbDirection from './LimbDirection';
import Address from './Address';
import Square from './Square';
import SquareBlank from './SquareBlank';
import Direction from '@/foundation/Direction';
import RowsAttacher from './RowsAttacher';
import BlankRestrict from './BlankRestrict';
import CardOnBoard from './CardOnBoard';
import SquareFilled from './SquareFilled';

namespace RowsFillabler {

  const doingAround = (address: Address, center: SquareFilled, rows: Rows): void => {

    LimbDirection
      .sAllFrom(center.side)
      .forEach((direction) => {

        const shifted = Address.shiftedToNext(direction, address)
        const square = Square.at(shifted, rows)
        if (!SquareBlank.accepts(square)) return

        const restrict = BlankRestrict.correspondedFor(direction, center)
        const opposite = Direction.oppositeOf(direction)
        const overwritten = SquareBlank.overwrittenOn(opposite, restrict, square)
        RowsAttacher.doingAt(shifted, overwritten, rows)
      })
  }

  export const doing = (rows: Rows, cardOnBoard: CardOnBoard): void => {

    // TODO: refactor
    const [fillPrimary, fillSecondary] = SquareFilled.sOf(cardOnBoard)
    const addressPrimary = Address.primaryFrom(cardOnBoard)
    const addressSecondary = Address.secondaryFrom(cardOnBoard)
    doingAround(addressPrimary, fillPrimary, rows)
    doingAround(addressSecondary, fillSecondary, rows)
  }
}

export default RowsFillabler;
