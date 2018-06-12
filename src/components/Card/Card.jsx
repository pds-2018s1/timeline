import React from 'react'
import classNames from 'classnames'
import './Card.css'

class Card extends React.Component {
  render() {
    const name = this.props.card.name
    const year = this.props.card.year
    const showingInfo = this.props.showingInfo
    const seleccionada =
      this.props.selectedCard && this.props.selectedCard.name === name
    const cardSelected = this.props.cardSelected

    return (
      <div
        className={classNames('card', { seleccionada: seleccionada })}
        onClick={() => cardSelected({ card: this.props.card })}
      >
        <div className="content">
          <div className="image">
            <img
              alt="card"
              src={this.props.card.image}
              width="100"
              height="170"
            />
          </div>
          {showingInfo && <div className="year">{year}</div>}
          <div className="text">{name}</div>
        </div>
      </div>
    )
  }
}

//src={require('./inte.jpg')}

export default Card
