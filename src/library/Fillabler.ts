import ApplicationError from 'ts-application-error';
import Rows from './Rows';
import Row from './Row';
import Vector from '@/foundation/Vector';
import Matrix from '@/foundation/Matrix';
import Int from 'ts-number/src/Int';

namespace Fillabler {

  const marginFor = (rows: Rows, outermost: number, secondmost: number): number => {
    return Row.isBlankAt(secondmost, rows) ? 0
     : Row.isBlankAt(outermost, rows) ? 1
     : 2
  }
  const topFor = (rows: Rows): number => {
    return marginFor(rows, 0, 1)
  }
  const bottomFor = (rows: Rows): number => {
    return marginFor(rows, -1, -2)
  }
  export const fromBy = (rows: Rows): Fillabler => {
    const top = topFor(rows)
    const bottom = bottomFor(rows)
    const transposed = Matrix.transposed(rows)
    const left = topFor(transposed)
    const right = bottomFor(transposed)
    return from(left, top, right, bottom)
  };
}

export default Fillabler;

  
  const fillabling = (rows: Rows, carded: SquareAddressedCarded): void => {

    putFillableAround(shiftedP, extended)
    putFillableAround(shiftedS, extended)

    return extended
  }




  const putFillableAround = (address: Address, rows: Rows): void => {

    const center = Square.at(address, rows)
    if (!center) throw new ApplicationError(`Failed to get a square at: ${address} in ${rows}`)
    if (!SquareFilled.accepts(center)) return



    LimbDirection.sAllFrom(center.side).forEach((direction) => {

      const shifted = Address.shiftedToNext(direction, address)
      const square = Square.at(shifted, rows)
      if (!SquareBlank.accepts(square)) return

      if (LimbDirection.isIncludedIn(center, direction)) {
        const opposite = Direction.oppositeOf(direction)
        const added = SquareBlank.OpenAddedOn(opposite, square)
        const addressed = SquareAddressed.from(shifted, added)
        const row = Row.attachedOf(addressed, rows)
      }
    })




    const limb = center.limb
    const directions = LimbDirection.sFrom(center)

    directions .forEach((direction) => {
      const shifted = Address.shiftedToNext(direction, address)
      const square = Square.at(shifted, rows)
      if (!SquareBlank.accepts(square)) return

      const opposite = Direction.oppositeOf(direction)
      const added = SquareBlank. square
    })
  }
