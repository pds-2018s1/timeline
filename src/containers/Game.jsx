import { connect } from 'react-redux'
import Game from '../components/Game/Game'
import { startGame } from '../actions/game'

const mapStateToProps = state => ({
  gameStarted: state.gameStarted,
  winner: state.winner,
  loggedIn: state.loggedIn,
  name: state.player.name,
  matches: [{id: 1, name: "Partida 1", size: 2},{id: 2, name: "Partida 2", size: 5}, {id: 3, name: "Partida 3", size: 8}]
})

const mapActionsToProps = dispatch => ({
  startGame : (matchName, matchSize) => { 
    return dispatch(startGame(matchName, matchSize))
  }
})

export default connect(mapStateToProps, mapActionsToProps)(Game)