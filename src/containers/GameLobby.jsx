import { connect } from 'react-redux'
import GameLobby from '../components/GameLobby/GameLobby'
import { startGame } from '../actions/game'

export default connect(
  () => ({}),
  ({
    startGame
  })) (GameLobby)