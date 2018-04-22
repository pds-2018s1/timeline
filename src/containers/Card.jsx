import { connect } from 'react-redux'
import Card from '../components/Card/Card'
import { selectedCard } from '../actions/game'

const mapStateToProps = state => ({
  selectedCard: state.selectedCard
})

export default connect(mapStateToProps, ({cartaSeleccionada: selectedCard}))(Card)