import Rows from './Rows';
import SquareAddressedCarded from './SquareAddressedCarded';
import SquareAddressed from './SquareAddressed';
import LimbDirection from './LimbDirection';
import Address from './Address';
import Square from './Square';
import SquareBlank from './SquareBlank';
import Direction from '@/foundation/Direction';
import Attacher from './Attacher';
import BlankRestrict from './BlankRestrict';

namespace Fillabler {

  const doingAround = (addressed: SquareAddressed, rows: Rows): void => {

    const center = addressed.squareFilled

    LimbDirection
      .sAllFrom(center.side)
      .forEach((direction) => {

        const shifted = Address.shiftedToNext(direction, addressed.address)
        const square = Square.at(shifted, rows)
        if (!SquareBlank.accepts(square)) return

        const restrict = BlankRestrict.whichFor(direction, center)
        const opposite = Direction.oppositeOf(direction)
        const overwritten = SquareBlank.overwrittenOn(opposite, restrict, square)
        Attacher.doingAt(shifted, overwritten, rows)
      })
  }

  export const doing = (rows: Rows, carded: SquareAddressedCarded): void => {

    doingAround(carded.primary, rows)
    doingAround(carded.secondary, rows)
  }
}

export default Fillabler;
