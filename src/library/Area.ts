
enum Area {
  RB,
  RT,
  LB,
  LT,
};

namespace Area {

  const all = [
    Area.RB,
    Area.RT,
    Area.LB,
    Area.LT,
  ]

  export const accepts = (a: any): a is Area => {
    return all.includes(a)
  }
}

export default Area;
