import { connect } from 'react-redux'
import TimelineSlot from '../components/TimelineSlot/TimelineSlot'
import { cardPlacedInTimeline } from '../actions/game'

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, ({
  cardPlacedInTimeline
}))(TimelineSlot)