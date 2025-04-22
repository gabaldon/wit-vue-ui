export enum Sort {
  ascentant,
  alphabetically,
  alphabeticallyReverse,
  descendant
}

export type Column = {
  value: string | number
  label: string
  url: string | null
}

export type Label = {
  sortType: Sort
  label: string
  index: number
}

export type Row = Column[]
