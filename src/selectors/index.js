export const getFormat = state => state.tableFormat
export const getCells = state => state.tableContent
export const getFormatedCells = state => {
  const format = getFormat(state)
  const cells = getCells(state)
  const formatedCells = cells.map((row, i) => row.map((cell, j)=>{
    return format[i] && format[i][j] ?
    { content: cell, style: format[i][j]} :
    { content: cell}
  }))
  const tmp = Object.keys(format).reduce((acc, rowIndex) => {
    const row = format[rowIndex]
    acc[rowIndex] = Object.keys(row).reduce((acc2, columnIndex) => {
      const column = row[columnIndex]
      acc2[columnIndex] = { style: { $set: column } }
      return acc2
    }, {})
    return acc
  }, {})

  return formatedCells
}
