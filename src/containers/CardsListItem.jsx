import { connect } from 'react-redux'
import CardsListItem from '../components/CardsListItem/CardsListItem'
import { editCard } from '../actions/game'

export default connect(
  () => ({}),
  {
    editCard
  }
)(CardsListItem)
