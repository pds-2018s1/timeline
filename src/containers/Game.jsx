import { connect } from 'react-redux'
import Game from '../components/Game/Game'
import { startGame } from '../actions/game'

const mapActionsToProps = dispatch => ({
  onStartGame: () => dispatch(startGame())
})

export default connect(null, mapActionsToProps)(Game)