import { connect } from 'react-redux'
import Card from '../components/Card/Card'
import { cardSelected } from '../actions/game'

const mapStateToProps = state => ({
  selectedCard: state.selectedCard
})

const mapActionsToProps = dispatch => ({
  cardSelected: card => dispatch(cardSelected(card))
})

export default connect(mapStateToProps, mapActionsToProps)(Card)