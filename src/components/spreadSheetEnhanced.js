import { connect } from 'react-redux'
import SpreadSheet from './spreadSheet'
import { selectCells } from '../actionCreators/tableSelection'
import { getCells, getShowColHeaders, getShowRowHeaders } from '../selectors'

const mapStateToProps = state => ({
  data: getCells(state),
  showColHeaders: getShowColHeaders(state),
  showRowHeaders: getShowRowHeaders(state)
})

const mapDispatchToProps = {
  handleSelectCells: selectCells
}

export default connect(mapStateToProps, mapDispatchToProps)(SpreadSheet)