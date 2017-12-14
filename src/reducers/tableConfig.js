import * as actionTypes from '../actionTypes'

const defaultState = {
  showColHeaders: true,
  showRowHeaders: true,
  zoomFactor: 1,
  columnWidths: [100, 100, 100, 100, 100],
  rowHeights: [30, 30, 30, 30],
  borders: []
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
    case actionTypes.SET_BORDERS:
      return Object.assign({}, state, { borders: mergeBorders( state.borders, action.payload)})
    default: return state
  }
}

function mergeBorders( original, change){
  const side = Object.keys(change.borders).pop()
  let {fromRow, fromColumn, toRow, toColumn} = change.selection
  const newBorders = original.map( row => row ? row.map( cell => cell ? Object.assign({}, cell) : null) : row)

  switch(side){
    case 'right':
      fromColumn = toColumn + 1
      change.borders = { left: change.borders.right}
    case 'left':
      for(let i = fromRow; i <= toRow; i++){
        if (!newBorders[i]) newBorders[i] = []
        if (!newBorders[i][fromColumn]) newBorders[i][fromColumn] = {}
        Object.assign(newBorders[i][fromColumn], change.borders)
      }
      break
    case 'bottom':
      fromRow = toRow + 1
      change.borders = { top: change.borders.bottom}
    case 'top':
      if (!newBorders[fromRow]) newBorders[fromRow] = []
      for (let i = fromColumn; i <= toColumn; i++) {
        if (!newBorders[fromRow][i]) newBorders[fromRow][i] = {}
        Object.assign(newBorders[fromRow][i], change.borders)
      }
      break
  }

  return newBorders
}

export default reducer