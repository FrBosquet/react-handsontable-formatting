import * as actionTypes from '../actionTypes'

export const changeCell = ([row, col, , newContent]) => {
  return {
    type: actionTypes.CHANGE_CELL,
    payload: { row, col, newContent }
  }
}

export const addRow = ( row ) => {
  return {
    type: actionTypes.ADD_ROW,
    payload: row
  }
}

export const addCol = ( col ) => {
  return {
    type: actionTypes.ADD_COLUMN,
    payload: col
  }
}