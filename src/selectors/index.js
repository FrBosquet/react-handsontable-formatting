import { createSelector } from 'reselect'

export const getCellsData = state => state.tableContent
export const getTableConfig = state => state.tableConfig
export const getShowColHeaders = state => getTableConfig(state).showColHeaders
export const getShowRowHeaders = state => getTableConfig(state).showRowHeaders
export const getCellsContent = createSelector(
  getCellsData,
  data => data.map( row => row.map( cell => cell.content))
)
export const getCellsStyle = createSelector(
  getCellsData,
  data => data.map( row => row.map( cell => cell.style || {}))
)