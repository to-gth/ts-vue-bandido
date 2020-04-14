import Address from './Address';
import Card from './Card';

type AddressPair = {
  primary: Address;
  secondary: Address;
};

namespace AddressPair {

  export const from = (card: Card, address: Address): AddressPair => {
    const primary = address
    const secondary = Address.shiftedToNext(card.direction, address)
    return { primary, secondary }
  }
}

export default AddressPair;
