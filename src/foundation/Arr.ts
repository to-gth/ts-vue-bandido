
export namespace Arr {

  export const isRectangle = (arr: any[][]): boolean => {
    const set = new Set(arr.map(row => row.length))
    return set.size <= 1
  }
}

export default Arr
