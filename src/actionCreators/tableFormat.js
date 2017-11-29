import { SET_FORMAT } from '../actionTypes'
import { selectCells } from './tableSelection'
import { fromRangeToCells, populateWith } from '../utils'

const addFormat = (selected, format) => {
  return {
    type: SET_FORMAT,
    payload: { selected, format }
  }
}

export const formatCells = ( selection, format ) => {
  return (dispatch, getState) => {
    const selected = fromRangeToCells( selection )
    //const cells = populateWith(selected, format)
    dispatch(addFormat( selected, format))
  }
}

