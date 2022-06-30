export const LEFT = 'LEFT' as const;
export const RIGHT = 'RIGHT' as const;

export type LoR = typeof LEFT | typeof RIGHT;

export type Coordinate = {
  x : number
  y : number
}

export type Limit = {
  left: number
  right: number
  up: number
  down: number
}