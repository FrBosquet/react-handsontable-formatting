import update from 'immutability-helper'

export function fromRangeToCells( range ){
  const {fromRow, fromColumn, toRow, toColumn} = range
  const cells = {}
  for(let i = fromRow; i <= toRow; i++){
    for(let j = fromColumn; j <= toColumn; j++){
      if(!cells[i]) cells[i] = {}
      cells[i][j] = 0
    }
  }
  return cells
}

export function mergeObjects( original, modifications ){
 return update(original, modifications)
}

export function populateWith( cells, obj){
  const newCells = {}
  for(let row in cells){
    newCells[row] = {}
    for(let cell in cells[row]){
      newCells[row][cell] = { style: {$merge: obj}}
    }
  }
  return newCells
}