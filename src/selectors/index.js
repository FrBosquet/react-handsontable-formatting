export const getFormat = state => state.tableFormat
export const getCells = state => state.tableContent
export const getFormatedCells = state => {
  const format = getFormat(state)
  const cells = getCells(state)
  const formatedCells = cells.map((row, i) => row.map((cell, j)=>{
    if(format[i] && format[i][j]){
      return Object.assign({}, cell, {style: format[i][j]})
    }
    return cell
  }))
  
  return formatedCells
}
