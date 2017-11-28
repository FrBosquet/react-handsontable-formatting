import { combineReducers } from 'redux'
import tableContent from './tableContent'
import tableSelection from './tableSelection'
import tableFormat from './tableFormat'

const defaultReducer = (state = { any: "hola" }, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const mainReducer = combineReducers({
  defaultReducer,
  tableContent,
  tableSelection,
  tableFormat
})

export default mainReducer
