import { connect } from 'react-redux'
import Deck from '../components/Deck/Deck'

const mapStateToProps = state => ({
  cards: state.cards,
  quantity: state.cards.length
})

export default connect(
  mapStateToProps,
  null
)(Deck)
