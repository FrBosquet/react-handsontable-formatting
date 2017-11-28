import { SET_FORMAT } from '../actionTypes'
import { selectCells } from './tableSelection'
import { fromRangeToCells, populateWith } from '../utils'

const addFormat = (cells, format) => {
  return {
    type: SET_FORMAT,
    cells
  }
}

export const formatCells = (format, selection) => {
  return (dispatch, getState) => {
    // TODO: Remove this
    const selected = fromRangeToCells({
      fromRow: selection[0],
      fromColumn: selection[1],
      toRow: selection[2],
      toColumn: selection[3]
    })
    const cells = populateWith(selected, format) 
    console.log('He llegado', selected)
    console.log('He llegado', cells)
    dispatch(addFormat(cells, 'red'))
  }
}

