import { SET_FORMAT } from '../actionTypes'
import { selectCells } from './tableSelection'
import { fromRangeToCells, populateWith } from '../utils'

export const formatCells = (selected, format) => {
  return {
    type: SET_FORMAT,
    payload: { selected: fromRangeToCells(selected), format }
  }
}

