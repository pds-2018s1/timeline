import { connect } from 'react-redux'
import TimelineSlot from '../components/TimelineSlot/TimelineSlot'
import { cardPlacedInTimeline, cardRejectedFromTimeline } from '../actions/game'

const mapStateToProps = state => ({
  selectedCard: state.selectedCard
})

export default connect(mapStateToProps, ({
  cardPlacedInTimeline,
  cardRejectedFromTimeline
}))(TimelineSlot)