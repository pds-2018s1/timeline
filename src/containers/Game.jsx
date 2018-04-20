import { connect } from 'react-redux'
import Game from '../components/Game/Game'

const mapStateToProps = state => ({
  gameStarted: state.gameStarted
})

export default connect(mapStateToProps, null)(Game)