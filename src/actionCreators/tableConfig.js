import { TOGGLE_COLUMNS_HEADER, TOGGLE_ROWS_HEADER } from '../actionTypes'

export const toggleColumsHeader = () => {
  return {
    type: TOGGLE_COLUMNS_HEADER
  }
}

export const toggleRowsHeader = () => {
  return {
    type: TOGGLE_ROWS_HEADER
  }
}