import Rows from './Rows';
import LimbDirection from './LimbDirection';
import Address from './Address';
import Square from './Square';
import SquareRoom from './SquareRoom';
import Direction from '@/foundation/Direction';
import RowsAttacher from './RowsAttacher';
import RoomRestrict from './RoomRestrict';
import CardOnBoard from './CardOnBoard';
import SquareFillOnBoardPair from './SquareFillOnBoardPair';
import SquareFillOnBoard from './SquareFillOnBoard';

namespace RowsFillabler {

  // const doingAround = (address: Address, center: SquareFill, rows: Rows): void => {
  const doingAround = ({address, squareFill}: SquareFillOnBoard, rows: Rows): void => {

    const center = squareFill

    LimbDirection
      .sAllFrom(center.side)
      .forEach((direction) => {

        const shifted = Address.shiftedToNext(direction, address)
        const square = Square.at(shifted, rows)
        if (!SquareRoom.accepts(square)) return

        const restrict = RoomRestrict.correspondedFor(direction, center)
        const opposite = Direction.oppositeOf(direction)
        const overwritten = SquareRoom.overwrittenOn(opposite, restrict, square)
        RowsAttacher.doingAt(shifted, overwritten, rows)
      })
  }

  export const doing = (rows: Rows, cardOnBoard: CardOnBoard): void => {

    // TODO: refactor
    const { primary, secondary } = SquareFillOnBoardPair.fromOf(cardOnBoard)
    // const [fillPrimary, fillSecondary] = SquareFill.sOf(cardOnBoard)
    // const addressPrimary = Address.primaryFrom(cardOnBoard)
    // const addressSecondary = Address.secondaryFrom(cardOnBoard)
    // doingAround(addressPrimary, fillPrimary, rows)
    // doingAround(addressSecondary, fillSecondary, rows)
    doingAround(primary, rows)
    doingAround(secondary, rows)
  }
}

export default RowsFillabler;
