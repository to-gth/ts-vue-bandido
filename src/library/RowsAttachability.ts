import Rows from './Rows';
import Address from './Address';
import Card from './Card';
import SquareRoom from './SquareRoom';
import Square from './Square';
import Row from './Row';

namespace RowsAttachability {


  const squareRoomBeingAt = (address: Address, rows: Rows): SquareRoom | null => {
    const row = Row.beingAt(address.top, rows)
    if (!row) return null
    const square = Square.beingAt(address.left, row)
    if (!SquareRoom.accepts(square)) return null
    return square
  }
  const squareRoomBeingPrimaryAt = (address: Address, rows: Rows): SquareRoom | null => {
    return squareRoomBeingAt(address, rows)
  }
  const squareRoomBeingSecondaryAt = (address: Address, card: Card, rows: Rows): SquareRoom | null => {
    const shifted = Address.shiftedToNext(card.direction, address)
    return squareRoomBeingAt(shifted, rows)
  }

  export const isOkAt = (address: Address, card: Card, rows: Rows): boolean => {

    const primary = squareRoomBeingPrimaryAt(address, rows)
    if (!primary) return false
    const secondary = squareRoomBeingSecondaryAt(address, card, rows)
    if (!secondary) return false

    return Card.isAttachableIn(primary, secondary, card)
  }
}

export default RowsAttachability;
