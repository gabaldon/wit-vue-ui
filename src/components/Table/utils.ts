import { Column, Row, Sort } from './WTable'

export function getMockupLabels2() {
  return [
    {
      sortType: Sort.alphabetically,
      label: 'Title',
      index: 0
    },
    {
      sortType: Sort.alphabetically,
      label: 'Description',
      index: 1
    },
    {
      label: 'Tags',
      index: 2
    },
    {
      label: 'Labels',
      index: 3
    },
    {
      sortType: Sort.alphabeticallyReverse,
      label: 'Date',
      index: 4
    },
    {
      label: 'Link',
      index: 5
    }
  ]
}

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
  label: 'Rank'
}
const addressRow = {
  value: 'wit',
  label: 'Address',
  url: 'https://'
}
const amountRow = {
  value: 1,
  label: 'Amount'
}
const row: Row = [rankRow, addressRow, amountRow]
export function addRow(index: number, row: Row): Row {
  return row.map((col) => {
    if (typeof col.value == 'number') {
      return {
        ...col,
        value: index
      }
    } else if (typeof col.value == 'string') {
      return {
        ...col,
        value: `${col.value.replace('1', index.toString())}`
      }
    } else {
      return col
    }
  })
}
export function getMockupData() {
  const row2: Row = addRow(2, row)
  const row3: Row = addRow(3, row)
  return [row, row2, row3]
}
const col2_1: Column = {
  value: 'Title',
  label: 'Title'
}
const col2_2 = {
  value: 'Description',
  label: 'Description'
}
const col2_3 = {
  chips: [
    {
      label: 'tag1',
      color: 'bg-wit-blue-500'
    },
    { label: 'tag2', color: 'bg-black-950' }
  ],
  label: 'Tags'
}
const col2_4 = {
  chips: [
    {
      label: 'label1',
      color: 'bg-black-600'
    },
    {
      label: 'label2',
      color: 'bg-wit-blue-600'
    }
  ],
  label: 'Labels'
}
const col2_5 = {
  value: '2025-01-11T00:00:00.000+02:00',
  label: 'Date'
}
const col2_6 = {
  value: 'Meet us there',
  label: 'Link',
  url: 'https://google.com'
}
const row1: Row = [col2_1, col2_2, col2_3, col2_4, col2_5, col2_6]
export function getMockupData2() {
  const row2: Row = addRow(2, row1)
  const row3: Row = addRow(3, row1)
  return [row1, row2, row3]
}
