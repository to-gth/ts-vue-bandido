
export enum Turn {
  none = 0,
  clockwise = 1,
  anticlockwise = -1,
}

export namespace Turn {

  export const isNone = (turns: Turn) => turns === Turn.none
}

export default Turn
