import React from "react"
import classNames from 'classnames'
import "./Card.css"

class Card extends React.Component {

  render() {
    const name = this.props.card.name 
    const year = this.props.card.year
    const showingInfo = this.props.showingInfo
    const seleccionada = this.props.selectedCard && this.props.selectedCard.name === name
    const cardSelected = this.props.cardSelected

    return ( 
      <div className={classNames('card', {'seleccionada' : seleccionada})} onClick={() => cardSelected( {card : this.props.card} )} >
        <div className="text"><b>{name}</b></div>
        <img className="image" alt="card" src={require('./inte.jpg')} />
        {showingInfo? <div className="year">{year}</div> : <div className="year">¿?</div>}
      </div>
    )
  }
}

export default Card
