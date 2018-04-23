import { connect } from 'react-redux'
import Discard from '../components/Discard/Discard'

const mapStateToProps = state => ({
  quantity: state.discard.quantity
})

export default connect(mapStateToProps, null)(Discard)