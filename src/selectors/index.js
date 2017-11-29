export const getCells = state => state.tableContent
export const getTableConfig = state => state.tableConfig
export const getShowColHeaders = state => getTableConfig(state).showColHeaders