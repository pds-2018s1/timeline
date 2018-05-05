import { connect } from 'react-redux'
import Game from '../components/Game/Game'

const mapStateToProps = state => ({
  gameStarted: state.gameStarted,
  winner: state.winner
})

export default connect(mapStateToProps, null)(Game)