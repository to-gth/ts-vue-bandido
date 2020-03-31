
import Point from '@/foundation/Point'
import ApplicationError from 'ts-application-error';
import Address from './Address';
import Rows from './Rows';
import Card from './Card';
import AddressCarded from './AddressCarded';

type AddressMargins = {
  lefttop: Point;
  rightbottom: Point;
};

namespace AddressMargins {

  const admits = (a: any): a is AddressMargins => {
    return !!a
      && Address.admits(a.lefttop)
      && Address.admits(a.rightbottom)
      && a.lefttop.left <= 0
      && a.lefttop.top <= 0
  }

  export const from = (lefttop: Point, rightbottom: Point): AddressMargins => {
    const margins = { lefttop, rightbottom }
    if (admits(margins)) return margins
    throw new ApplicationError(`Failed to create an address-margin from: ${ margins }`)
  }
}

namespace AddressMargins {

  export const by = (card: Card, address: Address, rows: Rows): AddressMargins => {

    const carded = AddressCarded.from(card, address)
    const outermostCard = Address.outermostOf(carded)

    const { lefttop, rightbottom } = Address.outermostIn(carded, rows)

    lefttop.left === 


    // if (_admits(square)) return square;
    // // throw new ApplicationError(`Failed to create a square from: ${ square }`)
    // throw new Error(`Failed to create a square from: ${square}`);
  };
}

export default AddressMargins;
