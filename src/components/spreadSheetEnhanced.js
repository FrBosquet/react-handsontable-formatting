import { connect } from 'react-redux'
import SpreadSheet from './spreadSheet'
import { selectCells } from '../actionCreators/tableSelection'
import { formatCells } from '../actionCreators/tableFormat'
import { getFormatedCells } from '../selectors'

const mapStateToProps = state => ({
  data: getFormatedCells(state)
})

const mapDispatchToProps = {
  handleSelectCells: selectCells,
  handleFormatCells: formatCells
}

export default connect(mapStateToProps, mapDispatchToProps)(SpreadSheet)