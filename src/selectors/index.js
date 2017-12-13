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
export const getZoomFactor = createSelector(
  getTableConfig,
  config => config.zoomFactor
)
export const getColumnWidths = createSelector(
  getTableConfig,
  config => config.columnWidths.map( column => column * config.zoomFactor)
)
export const getRowHeights = createSelector(
  getTableConfig,
  config => config.rowHeights.map(row => row * config.zoomFactor)
)

export const getBorders = createSelector(
  getTableConfig,
  config => config.borders
)