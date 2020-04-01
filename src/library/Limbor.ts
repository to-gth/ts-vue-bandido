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

namespace Limbor {

  export const namesFrom = (limb: Limb): string[] => {
    const names = []
    if (limb & Limbor.L) names.push(Limbor[Limbor.L])
    if (limb & Limbor.H) names.push(Limbor[Limbor.H])
    if (limb & Limbor.R) names.push(Limbor[Limbor.R])
    return names
  }
}

export default Limbor;
