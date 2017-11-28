import { connect } from 'react-redux'
import SpreadSheet from './spreadSheet'
import { selectCells } from '../actionCreators/tableSelection'
import { formatCells } from '../actionCreators/tableFormat'

const mapStateToProps = state => ({
  data: state.tableContent
})

const mapDispatchToProps = {
  handleSelectCells: selectCells,
  handleFormatCells: formatCells
}

export default connect(mapStateToProps, mapDispatchToProps)(SpreadSheet)