import { Row, Sort } from './WTable'

export function getMockupLabels() {
  return [
    {
      sortType: Sort.ascentant,
      label: 'Rank',
      index: 0
    },
    {
      sortType: Sort.alphabetically,
      label: 'Address',
      index: 1
    },
    {
      sortType: Sort.descendant,
      label: 'Amount',
      index: 2
    }
  ]
}
const rankRow = {
  value: 1,
  label: 'Rank',
  url: null
}
const addressRow = {
  value: 'wit3',
  label: 'Address',
  url: 'https://'
}
const amountRow = {
  value: 1,
  label: 'Amount',
  url: null
}
const row: Row = [rankRow, addressRow, amountRow]
export function addRow(index: number): Row {
  return row.map((col) => {
    if (typeof col.value == 'number') {
      return {
        ...col,
        value: index
      }
    } else {
      return {
        ...col,
        value: `wit${index - 1}`
      }
    }
  })
}
export function getMockupData() {
  const row2: Row = addRow(2)
  const row3: Row = addRow(3)
  return [row, row2, row3]
}
