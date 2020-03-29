
import Point from '@/foundation/Point'
import Area from './Area'

type Address = {
  area: Area;
  point: Point;
};

namespace Address {

  export const admits = (a: any): a is Address => {
    if(!Area.admits(a.area)) return false
    if(!Point.admits(a.point)) return false
    return true
  }

  export const from = (area: Area, point: Point): Address => {
    const address = { area, point };
    if (admits(address)) return address;
    throw new Error(`Failed to create an address from: ${area}, ${point}`);
  };
}

namespace Address {

  export const outermostIn = (rows: Rows): Address => {
  }
}

export default Address;
