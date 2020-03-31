import Address from './Address';
import Card from './Card';

type AddressCarded = {
  primary: Address,
  secondary: Address,
};

namespace AddressCarded {

  export const from = (card: Card, address: Address): AddressCarded => {
    const primary = address
    const secondary = Address.shiftedToNext(card.direction, address)
    return { primary, secondary }
  }
}

export default AddressCarded;
