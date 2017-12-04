import { combineReducers } from 'redux'
import tableContent from './tableContent'
import tableSelection from './tableSelection'
import tableConfig from './tableConfig'
import telemetry from './telemetry'

const mainReducer = combineReducers({
  tableConfig,
  tableContent,
  tableSelection,
  telemetry
})

export default mainReducer
