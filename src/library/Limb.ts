import Limbor from './Limbor'

enum Limb {
  L = Limbor.L,
  H = Limbor.H,
  R = Limbor.R,
  LH = Limbor.L + Limbor.H,
  LR = Limbor.L + Limbor.R,
  HR = Limbor.H + Limbor.R,
  LHR = Limbor.L + Limbor.H + Limbor.R,
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
  ]

  export const admits = (a: any): a is Limb => {

    return  all.includes(a)
  }
}

namespace Limb {

  export const has = (limbor: Limbor, limb: Limb): boolean => {
    return Limbor.isIncludedIn(limb, limbor)
  }
}

export default Limb;
