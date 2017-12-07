import * as actionTypes from '../actionTypes'

export const toggleColumsHeader = () => ({ type: actionTypes.TOGGLE_COLUMNS_HEADER })
export const toggleRowsHeader = () => ({ type: actionTypes.TOGGLE_ROWS_HEADER })
export const increaseZoom = () => ({ type: actionTypes.INCREASE_ZOOM })
export const decreaseZoom = () => ({ type: actionTypes.DECREASE_ZOOM })