import { connect } from 'react-redux'
import { compose, setDisplayName, withHandlers} from 'recompose'
import SpreadSheet from './spreadSheet'
import { selectCells } from '../actionCreators/tableSelection'
import { changeCell, addRow, addCol } from '../actionCreators/tableContent'
import { getCellsContent, getCellsStyle, getShowColHeaders, getShowRowHeaders } from '../selectors'

const mapStateToProps = state => ({
  data: getCellsContent(state),
  style: getCellsStyle(state),
  showColHeaders: getShowColHeaders(state),
  showRowHeaders: getShowRowHeaders(state),
  telemetry: state.telemetry
})

const mapDispatchToProps = {
  handleSelectCells: selectCells,
  changeCell,
  addRow,
  removeCol,
  removeRow,
  addCol
}

const enhance = compose(
  setDisplayName('SpreadSheet'),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleChange: props => changes => props.changeCell(...changes),
    handleAddRow: props => row => props.addRow( row ),
    handleRemoveCol: props => (col, amm) => props.removeCol(col, amm),
    handleRemoveRow: props => (row, amm) => props.removeRow(row, amm),
    handleAddCol: props => col => props.addCol( col ),
  })
)

export default enhance(SpreadSheet)

