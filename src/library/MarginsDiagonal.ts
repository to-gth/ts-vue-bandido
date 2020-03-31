
import Point from '@/foundation/Point'
import ApplicationError from 'ts-application-error';
import Address from './Address';
import Rows from './Rows';
import Card from './Card';
import AddressCarded from './AddressCarded';
import Vector from '@/foundation/Vector';

type MarginsDiagonal = {
  lefttop: Vector;
  rightbottom: Vector;
};

namespace MarginsDiagonal {

  const accepts = (a: any): a is MarginsDiagonal => {
    return !!a
      && Vector.accepts(a.lefttop)
      && Vector.accepts(a.rightbottom)
      && a.lefttop.x <= 0
      && a.lefttop.y <= 0
  }

  export const from = (lefttop: Vector, rightbottom: Vector): MarginsDiagonal => {
    const one = { lefttop, rightbottom }
    if (accepts(one)) return one
    throw new ApplicationError(`Failed to create an address-margins from: ${ one }`)
  }
}

namespace MarginsDiagonal {

  export const by = (card: Card, address: Address, rows: Rows): MarginsDiagonal => {

    const carded = AddressCarded.from(card, address)
    const outermostCard = Address.outermostOf(carded)

    const { lefttop, rightbottom } = Address.outermostIn(carded, rows)

    lefttop.left === 


    // if (_accepts(square)) return square;
    // // throw new ApplicationError(`Failed to create a square from: ${ square }`)
    // throw new Error(`Failed to create a square from: ${square}`);
  };
}

export default MarginsDiagonal;
