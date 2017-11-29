import { connect } from 'react-redux'
import { formatCells } from '../actionCreators/tableFormat'
import ToolBox from './toolBox'

const mapStateToProps = state => ({
  currentSelection: state.tableSelection
})

const mapDispatchToProps = {
  handleFormatCells: formatCells
}

export default connect(mapStateToProps,mapDispatchToProps)(ToolBox)
