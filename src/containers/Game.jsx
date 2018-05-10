import { connect } from 'react-redux'
import Game from '../components/Game/Game'

const mapStateToProps = state => ({
  gameStarted: state.gameStarted,
  winner: state.winner,
  loggedIn: state.loggedIn,
  name: state.player.name
})

export default connect(mapStateToProps, null)(Game)