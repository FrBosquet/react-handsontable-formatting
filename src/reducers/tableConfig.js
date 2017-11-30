import { TOGGLE_COLUMNS_HEADER, TOGGLE_ROWS_HEADER } from '../actionTypes'

const defaultState = {
  showColHeaders: false,
  showRowHeaders: true
}

const reducer = ( state = defaultState, action) => {
  switch(action.type){
    case TOGGLE_COLUMNS_HEADER: return Object.assign({}, state, {showColHeaders: !state.showColHeaders})
    case TOGGLE_ROWS_HEADER: return Object.assign({}, state, {showRowHeaders: !state.showRowHeaders})
    default: return state
  }
}

export default reducer