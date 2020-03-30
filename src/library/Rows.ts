
import Row from './Row';
import Address from './Address';
import Card from './Card';
import SquareAddressed from './SquareAddressed';
import Arr from '@/foundation/Arr';
import Int from 'ts-number/src/Int';
import Square from './Square';
import Limb from './Limb';

type Rows = Row[]

namespace Rows {

  const admits = (a: Row[]): a is Rows => {
    return true
      && a.length >= 1
      && Arr.isRectangle(a)
  };

  // export const from = (): Rows => {
  //   const row = []
  //   if (_admits(square)) return square;
  //   // throw new ApplicationError(`Failed to create a square from: ${ square }`)
  //   throw new Error(`Failed to create a square from: ${square}`);
  // };
}

namespace Rows {

  export const widthOf = (rows: Rows): number => rows[0].length
  export const heightOf = (rows: Rows): number => rows.length
}

namespace Rows {

  const blankFrom = (leftTop: Address, rightBottom: Address): Rows => {
    const width = Int.from(rightBottom.left - leftTop.left)
    const height = Int.from(rightBottom.top - leftTop.top)
    return Arr.rectangleOf(width, height)
  }
  const extendedBy = (leftTop: Address, rightBottom: Address, rows: Rows): Rows => {
    const extended = blankFrom(leftTop, rightBottom)
    const diff = Address.oppositeOf(leftTop)
    return Arr.pastedAt(diff, extended, rows)
  }

  const _attach = (squareAddressed: SquareAddressed, diff: Address, rows: Rows): void => {
    const { address, square } = squareAddressed
    const opposite = Address.oppositeOf(diff)
    const shifted = Address.shiftedBy(opposite, address)
    rows[shifted.top][shifted.left] = square
  }

  const _addMarginTo = (rows: Rows): Rows => {
    rows.slice(-1)
  }

  const putFillableAround = (address: Address, rows: Rows): void => {

    const center = Square.at(address, rows)
    const limb = center.limb
    const directions = Limb.directionsOf(limb, center.side)

    directions
      .map((direction) => Address.shiftedToNext(direction, address))
      .filter((address) => Square.isBlankAt(address, rows))
      .map((address) => {
      })
  }

  export const attachedAt = (address: Address, card: Card, rows: Rows): Rows => {

    const { primary, secondary } = SquareAddressed.primaryAndSecondaryFrom(card, address)
    const { leftTop, rightBottom } = Address.outermostIn(rows, primary.address, secondary.address)

    const extended = extendedBy(leftTop, rightBottom, rows)
    _attach(primary, leftTop, extended)
    _attach(secondary, leftTop, extended)

    const margined = _addMarginTo(extended)


    const opposite = Address.oppositeOf(leftTop)
    const shiftedP = Address.shiftedBy(opposite, primary.address)
    const shiftedS = Address.shiftedBy(opposite, secondary.address)
    putFillableAround(shiftedP, extended)
    putFillableAround(shiftedS, extended)

    return extended
  }
}

namespace Rows {

  const blank = (): Rows => [Row.blank()]

  export const initialized = (): Rows => {

    const card = Card.first()
    const address = Address.zero
    const rows = blank()
    return attachedAt(address, card, rows)
  }
}

export default Rows;
