import React from "react"
import classNames from 'classnames'
import "./Card.css"

class Card extends React.Component {

  render() {
    const fact = this.props.fact
    const name = fact.name 
    const year = fact.year
    const showingInfo = this.props.showingInfo
    const seleccionada = this.props.selectedCard && this.props.selectedCard.fact.name === name
    const cardSelected = this.props.cardSelected

    return ( 
      <div className={classNames('card', {'seleccionada' : seleccionada})} onClick={() => cardSelected( {fact : fact} )} >
        <div className="text"><b>{name}</b></div>
        <img className="image" alt="card" src={require('./inte.jpg')} />
        {showingInfo? <div className="year">{year}</div> : <div className="year">¿?</div>}
      </div>
    )
  }
}

export default Card
