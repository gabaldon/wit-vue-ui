export enum Sort {
  ascentant,
  alphabetically,
  alphabeticallyReverse,
  descendant
}

export type Column = {
  value?: string | number
  chips?: Chip[]
  label: string
  url?: string
}

export type Label = {
  sortType?: Sort
  label: string
  index: number
}

export type Chip = {
  label: string
  color: string
}

export type Row = Column[]
