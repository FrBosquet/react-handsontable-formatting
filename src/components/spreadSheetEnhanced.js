import { connect } from 'react-redux'
import SpreadSheet from './spreadSheet'
import { selectCells } from '../actionCreators/tableSelection'
import { changeCell } from '../actionCreators/tableContent'
import { getCellsContent, getCellsStyle, getShowColHeaders, getShowRowHeaders } from '../selectors'

const mapStateToProps = state => ({
  data: getCellsContent(state),
  style: getCellsStyle(state),
  showColHeaders: getShowColHeaders(state),
  showRowHeaders: getShowRowHeaders(state)
})

const mapDispatchToProps = {
  handleSelectCells: selectCells,
  handleChangeCell: changeCell 
}

export default connect(mapStateToProps, mapDispatchToProps)(SpreadSheet)

