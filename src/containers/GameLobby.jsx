import { connect } from 'react-redux'
import GameLobby from '../components/GameLobby/GameLobby'
import { startGame } from '../actions/game'

const mapActionsToProps = dispatch => ({
  startGame : name => { 
    return dispatch(startGame(name))
  }
})

export default connect(null, mapActionsToProps) (GameLobby)