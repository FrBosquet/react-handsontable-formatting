import * as actionTypes from '../actionTypes'
import { mergeObjects, populateWith, newEmptyCell, newEmptyRow } from '../utils'

const defaultTable = [
  [newEmptyCell(), newEmptyCell(), newEmptyCell(), newEmptyCell(), newEmptyCell()],
  [newEmptyCell(), newEmptyCell(), newEmptyCell(), newEmptyCell(), newEmptyCell()],
  [newEmptyCell(), newEmptyCell(), newEmptyCell(), newEmptyCell(), newEmptyCell()]
]

const reducer = (state = defaultTable, action) => {
  switch(action.type){
    default: return state
    case actionTypes.SET_FORMAT: 
      const { selected, format } = action.payload
      const formatedCells = populateWith(selected, format)
      return mergeObjects(state, formatedCells)
    case actionTypes.CHANGE_CELL:
      const { row, col, newContent } = action.payload
      return mergeObjects(state, { [row]: { [col]: { content:{ $set: newContent}}}})
  }
}

export default reducer