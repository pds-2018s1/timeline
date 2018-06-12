import { connect } from 'react-redux'
import Game from '../components/Game/Game'
import { startGame, fetchMatches, joinGame } from '../actions/game'

const mapStateToProps = state => ({
  gameStarted: state.gameStarted,
  winner: state.winner,
  loggedIn: state.loggedIn,
  name: state.player.name,
  administrate: state.administrate,
  waitingForMatch: state.waitingForMatch,
  matchSize: state.matchSize,
  matches: state.matches
})

const mapActionsToProps = dispatch => ({
  startGame: (matchName, matchSize) => {
    return dispatch(startGame(matchName, matchSize))
  },
  joinGame: id => {
    return dispatch(joinGame(id))
  },
  fetchMatches: () => {
    return dispatch(fetchMatches())
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Game)
