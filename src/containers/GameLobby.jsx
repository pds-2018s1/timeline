import { connect } from 'react-redux'
import GameLobby from '../components/GameLobby/GameLobby'
import { startGame } from '../actions/gameLobby'

export default connect(
  () => ({}),
  ({
    startGame
  })) (GameLobby)