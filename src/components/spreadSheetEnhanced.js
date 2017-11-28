import { connect } from 'react-redux'
import SpreadSheet from './spreadSheet'

const mapStateToProps = state => ({
  data: state.tableContent
})

export default connect(mapStateToProps)(SpreadSheet)