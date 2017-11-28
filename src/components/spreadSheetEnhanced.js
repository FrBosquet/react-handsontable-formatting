import { connect } from 'react-redux'
import SpreadSheet from './spreadSheet'
import { selectCells } from '../actionCreators/tableSelection'

const mapStateToProps = state => ({
  data: state.tableContent
})

const mapDispatchToProps = {
  handleSelectCells: selectCells
}

export default connect(mapStateToProps, mapDispatchToProps)(SpreadSheet)