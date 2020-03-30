
enum BlankRestrict {
  Free,
  Open,
  Close,
}

namespace BlankRestrict {

  const all = [
    BlankRestrict.Free,
    BlankRestrict.Open,
    BlankRestrict.Close,
  ]

  export const admits = (a: any): a is BlankRestrict => {
    return all.includes(a)
  }
}

export default BlankRestrict;
