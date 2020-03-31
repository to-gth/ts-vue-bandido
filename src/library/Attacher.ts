import ApplicationError from 'ts-application-error';
import Rows from './Rows';
import Row from './Row';
import Vector from '@/foundation/Vector';
import Matrix from '@/foundation/Matrix';
import Int from 'ts-number/src/Int';

namespace Attacher {

  const _attach = (squareAddressed: SquareAddressed, diff: Address, rows: Rows): void => {
    const { address, square } = squareAddressed
    const opposite = Address.oppositeOf(diff)
    const shifted = Address.shiftedBy(opposite, address)
    rows[shifted.top][shifted.left] = square
  }
}

export default Attacher;
