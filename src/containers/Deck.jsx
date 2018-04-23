import { connect } from 'react-redux'
import Deck from '../components/Deck/Deck'

const mapStateToProps = state => ({
  cards: state.deck,
  quantity: state.deck.length
})

export default connect(mapStateToProps, null)(Deck)