import { combineReducers } from 'redux'
import tableContent from './tableContent'
import tableSelection from './tableSelection'
import tableConfig from './tableConfig'

const mainReducer = combineReducers({
  tableConfig,
  tableContent,
  tableSelection
})

export default mainReducer
