import { connect } from 'react-redux'
import Game from '../components/Game/Game'
import { startGame, startNewGame } from '../actions/game'

const mapActionsToProps = dispatch => ({
  onStartGame: () => dispatch(startNewGame())
})

export default connect(null, mapActionsToProps)(Game)