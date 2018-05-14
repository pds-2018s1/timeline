import { connect } from 'react-redux'
import CardsManagement from '../components/CardsManagement/CardsManagement'
import { administrate } from '../actions/game'

const mapActionsToProps = dispatch => ({
  administrate : () => { 
    return dispatch(administrate())
  }
})

export default connect(null, mapActionsToProps) (CardsManagement)