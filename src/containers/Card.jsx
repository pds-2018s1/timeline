import { connect } from 'react-redux'
import Card from '../components/Card/Card'
import { selectedCard } from '../actions/game'

export default connect(null, ({cartaSeleccionada: selectedCard}))(Card)