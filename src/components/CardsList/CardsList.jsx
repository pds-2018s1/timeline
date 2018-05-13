import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List'
import { fetchCards } from '../../actions/game'
import CardsListItem from '../CardsListItem/CardsListItem';

class CardsList extends React.Component {

  componentDidMount() {
    const { fetchCards } = this.props
    fetchCards()
  }
  
  render() {
    const { cards } = this.props

    return (
      <div>
       <h1>Listado de cartas</h1>
        <List>
          {cards.map(card => (
            <CardsListItem key={card._id} card={card} />
          ))}
        </List>
        
      </div>
    )
  }
}

export default connect(state => ({
  cards: state.cards
}),
{
  fetchCards
})(CardsList)
/*import React from 'react'


const CardsList = ({}) => (
    <div> Cartas </div>
)

export default CardsList*/