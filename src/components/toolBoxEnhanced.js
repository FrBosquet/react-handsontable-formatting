import { connect } from 'react-redux'
import { formatCells } from '../actionCreators/tableFormat'
import { toggleColumsHeader, toggleRowsHeader, increaseZoom, decreaseZoom, formatBorders } from '../actionCreators/tableConfig'
import ToolBox from './toolBox'
import { withHandlers, compose } from 'recompose'

const mapStateToProps = state => ({
  currentSelection: state.tableSelection
})

const mapDispatchToProps = {
  handleFormatCells: formatCells,
  toggleColumsHeader,
  toggleRowsHeader,
  increaseZoom,
  decreaseZoom,
  formatBorders
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    setRed: ({ handleFormatCells, currentSelection }) => () => handleFormatCells(currentSelection, { color: 'red' }),
    setBold: ({ handleFormatCells, currentSelection }) => () => handleFormatCells(currentSelection, { fontWeight: 'bold' }),
    setLeftBlueBorder: ({ formatBorders, currentSelection }) => () => {
      formatBorders(currentSelection, {left: { width: 2, color: 'blue' }} )
    },
    setTopRedBorder: ({ formatBorders, currentSelection }) => () => {
      formatBorders(currentSelection, {top: { width: 2, color: 'red' }} )
    },
    setBottomGreenBorder: ({ formatBorders, currentSelection }) => () => {
      formatBorders(currentSelection, { right: { width: 2, color: 'green' } })
    },
    setRightYellowBorder: ({ formatBorders, currentSelection }) => () => {
      formatBorders(currentSelection, { bottom: { width: 2, color: 'yellow' } })
    },
    setSquareBlackBorder: ({ formatBorders, currentSelection }) => () => {
      formatBorders(currentSelection, { bottom: { width: 2, color: 'black' } })
      formatBorders(currentSelection, { top: { width: 2, color: 'black' } })
      formatBorders(currentSelection, { right: { width: 2, color: 'black' } })
      formatBorders(currentSelection, { left: { width: 2, color: 'black' } })
    },
    clearBorders: ({ formatBorders, currentSelection }) => () => {
      formatBorders(currentSelection, { bottom: { width: 1, style: '' } })
      formatBorders(currentSelection, { top: { width: 1, style: '' } })
      formatBorders(currentSelection, { right: { width: 1, style: '' } })
      formatBorders(currentSelection, { left: { width: 1, style: '' } })
    }
  })
)

export default enhance(ToolBox)
