import * as actionTypes from '../actionTypes'

export const changeCell = ([row, col, , newContent]) => {
  return {
    type: actionTypes.CHANGE_CELL,
    payload: { row, col, newContent }
  }
}