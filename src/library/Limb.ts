
enum Limb {
  L,
  H,
  R,
  LH,
  LR,
  HR,
  LHR,
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

export default Limb;
