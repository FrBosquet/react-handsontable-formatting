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
    case actionTypes.ADD_ROW:
      const newState = [
        ...state.slice(0, action.payload ),
        Array(state[0].length).fill(null).map(newEmptyCell),
        ...state.slice( action.payload )
      ]
      return newState
    case actionTypes.ADD_COLUMN:
      return state
        .map( row => [
          ...row.slice(0, action.payload),
          newEmptyCell(),
          ...row.slice(action.payload)
        ])
    case actionTypes.REMOVE_ROW:
      return [
        ...state.slice(0, action.payload.row),
        ...state.slice(action.payload.row + action.payload.amm)
      ]
    case actionTypes.REMOVE_COL:
      return state
        .map( row => [
          ...row.slice(0, action.payload.col),
          ...row.slice(action.payload.col + action.payload.amm)
          ]
        )
  }
}

export default reducer