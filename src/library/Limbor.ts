import Limb from './Limb'

enum Limbor {
  L = 1 << 0,
  H = 1 << 1,
  R = 1 << 2,
}

namespace Limbor {

  export const all = [
    Limbor.L,
    Limbor.H,
    Limbor.R,
  ]

  export const isIncludedIn = (limb: Limb, limbor: Limbor): boolean => {
    return (limb & limbor) === limbor
  }
}

export default Limbor;
