import { connect } from 'react-redux'
import CardsList from '../components/CardsList/CardsList'
import { addCard, fetchCards } from '../actions/game'

  export default connect(state => ({
    cards: state.cardsList
  }),
  {
    fetchCards,
    addCardAction: addCard
  })(CardsList)