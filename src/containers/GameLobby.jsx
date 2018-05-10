import { connect } from 'react-redux'
import GameLobby from '../components/GameLobby/GameLobby'
import { login } from '../actions/game'

const mapActionsToProps = dispatch => ({
  login : name => { 
    return dispatch(login(name))
  }
})

export default connect(null, mapActionsToProps) (GameLobby)