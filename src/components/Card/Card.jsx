import React from "react"
import classNames from 'classnames'
import "./Card.css"

class Card extends React.Component {

  seleccionarCarta = () => {
    this.props.cartaSeleccionada(this.props.fact)
  }

  render() {
    const name = this.props.fact.name 
    const year = this.props.fact.year
    const showingInfo = this.props.showingInfo

    return (
      <div className="card" onClick={this.seleccionarCarta}>
        <div className="text"><b>{name}</b></div>
        <img className="image" alt="card" src={require('./inte.jpg')} />
        {showingInfo? <div className="year">{year}</div> : <div className="year">¿?</div>}
      </div>
    )
  }
}

export default Card
