import { connect } from 'react-redux'
import CardsList from '../components/CardsList/CardsList'
import { addCard, fetchCards } from '../actions/game'
/*
export default connect(
  () => ({}),
  ({
    addCardAction: addCard
  })) (CardsList)

*/
  export default connect(state => ({
    cards: state.cards
  }),
  {
    fetchCards,
    addCardAction: addCard
  })(CardsList)