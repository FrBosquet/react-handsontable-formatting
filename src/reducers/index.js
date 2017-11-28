import { combineReducers } from 'redux'
import tableContent from './tableContent'
import tableSelection from './tableSelection'

const defaultReducer = (state = { any: "hola" }, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const mainReducer = combineReducers({
  defaultReducer,
  tableContent,
  tableSelection
})

export default mainReducer
