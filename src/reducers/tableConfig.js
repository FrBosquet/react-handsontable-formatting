import * as actionTypes from '../actionTypes'

const defaultState = {
  showColHeaders: true,
  showRowHeaders: true,
  zoomFactor: 1,
  columnWidths: [100, 100, 100, 100, 100],
  rowHeights: [30, 30, 30, 30]
}

const reducer = ( state = defaultState, action) => {
  switch(action.type){
    case actionTypes.TOGGLE_COLUMNS_HEADER: 
      return Object.assign({}, state, {showColHeaders: !state.showColHeaders})
    case actionTypes.TOGGLE_ROWS_HEADER: 
      return Object.assign({}, state, {showRowHeaders: !state.showRowHeaders})
    case actionTypes.INCREASE_ZOOM: 
      return Object.assign({}, state, { zoomFactor: state.zoomFactor < 2 ? state.zoomFactor + 0.1 : 2 })
    case actionTypes.DECREASE_ZOOM:
      return Object.assign({}, state, { zoomFactor: state.zoomFactor > .5 ? state.zoomFactor - 0.1 : .5 })
    default: return state
  }
}

export default reducer