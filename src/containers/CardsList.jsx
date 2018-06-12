import { connect } from 'react-redux'
import CardsList from '../components/CardsList/CardsList'
import { addCard, fetchCards, deleteCard } from '../actions/game'

export default connect(
  state => ({
    cards: state.cards
  }),
  {
    fetchCards,
    deleteCardAction: deleteCard,
    addCardAction: addCard
  }
)(CardsList)
