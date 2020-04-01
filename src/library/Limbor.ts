import Limb from './Limb'

enum Limbor {
  L = 1 << 0,
  H = 1 << 1,
  R = 1 << 2,
  D = 1 << 3,
}

namespace Limbor {

  export const all = [
    Limbor.L,
    Limbor.H,
    Limbor.R,
    Limbor.D,
  ]

  export const isIncludedIn = (limb: Limb, limbor: Limbor): boolean => {
    return (limb & limbor) === limbor
  }
}

namespace Limbor {

  const namesOf = (limbor: Limbor): string => Limbor[limbor]

  export const namesFrom = (limb: Limb): string[] => {
    return all
      .filter(limbor => limb & limbor)
      .map(namesOf)
  }
}

export default Limbor;


    // const names = []
    // if (limb & Limbor.L) names.push(Limbor[Limbor.L])
    // if (limb & Limbor.H) names.push(Limbor[Limbor.H])
    // if (limb & Limbor.R) names.push(Limbor[Limbor.R])
    // if (limb & Limbor.D) names.push(Limbor[Limbor.D])
    // return names
