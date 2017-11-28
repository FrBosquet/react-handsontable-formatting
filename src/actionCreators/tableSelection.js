import { SELECT_CELLS } from '../actionTypes'

export const selectCells = (...cells) =>{
  return {
    type: SELECT_CELLS,
    payload: {
      fromRow: cells[0],
      fromColumn: cells[1],
      toRow: cells[2],
      toColumn: cells[3]
    }
  }
}