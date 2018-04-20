import { connect } from 'react-redux'
import Table from '../components/Table/Table'

const mapStateToProps = state => ({
    turn: state.turn,
    player: state.player,
    opponents: state.opponents,
    timeline: state.timeline,
    deck: state.deck
})

export default connect(mapStateToProps, null)(Table)