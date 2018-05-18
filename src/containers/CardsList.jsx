import { connect } from 'react-redux'
import CardsList from '../components/CardsList/CardsList'
import { addCard } from '../actions/game'

  export default connect(state => ({
    cards: state.cards
  }),
  {
    addCardAction: addCard
  })(CardsList)