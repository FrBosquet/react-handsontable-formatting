import { combineReducers } from 'redux'
import tableContent from './dataTable'

const defaultReducer = (state = { any: "hola" }, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const mainReducer = combineReducers({
  defaultReducer,
  tableContent
})

export default mainReducer
