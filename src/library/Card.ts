
import Limb from '@/library/Limb'
import Square from '@/library/Square'
import Direction from '@/foundation/Direction'
import SquareLeft from './SquareLeft';

type Card = {
  squareLeft: Square;
  squareRight: Square;
  direction: Direction;
};

namespace Card {

  // const _admits = (a: any): a is Card => {
  // };

  export const from = (
    limbLeft: Limb,
    limbRight: Limb,
    direction: Direction = Direction.Right
  ): Card => {

    const squareLeft = Square.from(Direction.Left, limbLeft)
    const squareRight = Square.from(Direction.Right, limbRight)
    const card = { squareLeft, squareRight, direction };
    return card
    // if (_admits(card)) return card;
    // throw new ApplicationError(`Failed to create a square from: ${ square }`)
    // throw new Error(`Failed to create a card from: ${card}`);
  };
}

namespace Card {

  // export const first = from(SquareLeft.B, SquareRight.RB, Direction.Right)

  export const first = (): Card => {

    return from(Limb.L, Limb.HR)
  }
}

export default Card;
