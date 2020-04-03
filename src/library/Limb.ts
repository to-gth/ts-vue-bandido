import Limbor from './Limbor'
import CardType from './CardType'

enum Limb {
  L = Limbor.L,
  H = Limbor.H,
  R = Limbor.R,
  LH = Limbor.L + Limbor.H,
  LR = Limbor.L + Limbor.R,
  HR = Limbor.H + Limbor.R,
  LHR = Limbor.L + Limbor.H + Limbor.R,
  D = Limbor.D
}

namespace Limb {

  const all = [
    Limb.L,
    Limb.H,
    Limb.R,
    Limb.LH,
    Limb.LR,
    Limb.HR,
    Limb.LHR,
    Limb.D,
  ]

  export const accepts = (a: any): a is Limb => {

    return  all.includes(a)
  }
}

namespace Limb {

  export const has = (limbor: Limbor, limb: Limb): boolean => {
    return Limbor.isIncludedIn(limb, limbor)
  }
}

namespace Limb {

  const mask = 0b1111
  export const primaryOf = (cardType: CardType): Limb => {
    return (cardType >> 4) & mask
  }
  export const secondaryOf = (cardType: CardType): Limb => {
    return cardType & mask
  }
}

export default Limb;
