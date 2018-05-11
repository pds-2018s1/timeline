import { connect } from 'react-redux'
import CreateMatch from '../components/CreateMatch/CreateMatch'
import { startGame } from '../actions/game'

const mapActionsToProps = dispatch => ({
  startGame : (matchName, matchSize) => { 
    return dispatch(startGame(matchName, matchSize))
  }
})

export default connect(null, mapActionsToProps) (CreateMatch)