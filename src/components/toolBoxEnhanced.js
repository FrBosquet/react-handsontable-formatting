import { connect } from 'react-redux'
import { formatCells } from '../actionCreators/tableFormat'
import { toggleColumsHeader, toggleRowsHeader } from '../actionCreators/tableConfig'
import ToolBox from './toolBox'
import { withHandlers, compose } from 'recompose'

const mapStateToProps = state => ({
  currentSelection: state.tableSelection
})

const mapDispatchToProps = {
  handleFormatCells: formatCells,
  toggleColumsHeader,
  toggleRowsHeader
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    setRed: ({ handleFormatCells, currentSelection }) => () => handleFormatCells(currentSelection, { color: 'red' }),
    setBold: ({ handleFormatCells, currentSelection }) => () => handleFormatCells(currentSelection, { fontWeight: 'bold' })    
  })
)

export default enhance(ToolBox)
