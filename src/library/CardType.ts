import Limb from "./Limb";

enum CardType {
  LHRxD = (3 << 8) + (Limb.LHR << 4) + Limb.D,
  LHRxH = (2 << 8) + (Limb.LHR << 4) + Limb.H,
  LHRxL = (2 << 8) + (Limb.LHR << 4) + Limb.L,
  LHRxLHR = (1 << 8) + (Limb.LHR << 4) + Limb.LHR,
  LHRxR = (2 << 8) + (Limb.LHR << 4) + Limb.R,
  LHxD = (3 << 8) + (Limb.LH << 4) + Limb.D,
  LHxH = (2 << 8) + (Limb.LH << 4) + Limb.H,
  LHxHR = (2 << 8) + (Limb.LH << 4) + Limb.HR,
  LHxL = (2 << 8) + (Limb.LH << 4) + Limb.L,
  LHxLH = (2 << 8) + (Limb.LH << 4) + Limb.LH,
  LHxLR = (2 << 8) + (Limb.LH << 4) + Limb.LR,
  LHxR = (2 << 8) + (Limb.LH << 4) + Limb.R,
  LRxD = (3 << 8) + (Limb.LR << 4) + Limb.D,
  LRxH = (2 << 8) + (Limb.LR << 4) + Limb.H,
  LRxHR = (2 << 8) + (Limb.LR << 4) + Limb.HR,
  LRxL = (2 << 8) + (Limb.LR << 4) + Limb.L,
  LRxLHR = (1 << 8) + (Limb.LR << 4) + Limb.LHR,
  LRxLR = (2 << 8) + (Limb.LR << 4) + Limb.LR,
  LRxR = (2 << 8) + (Limb.LR << 4) + Limb.R,
  LxD = (3 << 8) + (Limb.L << 4) + Limb.D,
  LxH = (2 << 8) + (Limb.L << 4) + Limb.H,
  LxL = (2 << 8) + (Limb.L << 4) + Limb.L,
  LxR = (2 << 8) + (Limb.L << 4) + Limb.R,
  HRxD = (3 << 8) + (Limb.HR << 4) + Limb.D,
  HRxH = (2 << 8) + (Limb.HR << 4) + Limb.H,
  HRxHR = (2 << 8) + (Limb.HR << 4) + Limb.HR,
  HRxL = (2 << 8) + (Limb.HR << 4) + Limb.L,
  HRxR = (2 << 8) + (Limb.HR << 4) + Limb.R,
  HxD = (3 << 8) + (Limb.H << 4) + Limb.D,
  HxH = (2 << 8) + (Limb.H << 4) + Limb.H,
  HxR = (2 << 8) + (Limb.H << 4) + Limb.R,
  RxD = (3 << 8) + (Limb.R << 4) + Limb.D,
  RxR = (2 << 8) + (Limb.R << 4) + Limb.R,
}

namespace CardType {

  export const numberOf = (cardType: CardType): number => {
    return cardType >> 8
  }
}

namespace CardType {

  const all = [
    CardType.LHRxD,
    CardType.LHRxH,
    CardType.LHRxL,
    CardType.LHRxLHR,
    CardType.LHRxR,
    CardType.LHxD,
    CardType.LHxH,
    CardType.LHxHR,
    CardType.LHxL,
    CardType.LHxLH,
    CardType.LHxLR,
    CardType.LHxR,
    CardType.LRxD,
    CardType.LRxH,
    CardType.LRxHR,
    CardType.LRxL,
    CardType.LRxLHR,
    CardType.LRxLR,
    CardType.LRxR,
    CardType.LxD,
    CardType.LxH,
    CardType.LxL,
    CardType.LxR,
    CardType.HRxD,
    CardType.HRxH,
    CardType.HRxHR,
    CardType.HRxL,
    CardType.HRxR,
    CardType.HxD,
    CardType.HxH,
    CardType.HxR,
    CardType.RxD,
    CardType.RxR,
  ]

  const _all = (): CardType[] => {
    return all.flatMap((cardType) => {
      const n = numberOf(cardType)
      return [...Array(n)].fill(cardType)
    })
  }
  const randomIndice = (size: number) => {
    const sequence = [...Array(size)].map((_, i) => i)
    const random = []
    while (size) {
      const index = Math.random() * size
      const one = sequence.splice(index, 1)
      random.push(one[0])
      size--
    }
    return random
  }

  export const randomAll = (): CardType[] => {

    const all = _all()
    const indice = randomIndice(all.length)
    return indice.map(i => all[i])
  }
}

export default CardType
