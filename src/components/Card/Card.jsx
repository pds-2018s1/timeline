import React from "react"
import classNames from 'classnames'
import "./Card.css"

class Card extends React.Component {

  seleccionarCarta = () => {
    //Las cartas del timeline no se pueden seleccionar, por lo tanto,
    //solo permitimos seleccionar aquellas que no muestran el año.
    console.log(this.props.showingInfo)
    if(!this.props.showingInfo) 
      this.props.cartaSeleccionada(this.props.fact)
  }

  render() {
    const name = this.props.fact.name 
    const year = this.props.fact.year
    const showingInfo = this.props.showingInfo
    const seleccionada = this.props.selectedCard && this.props.selectedCard.name === name

    return ( 
      <div className={classNames('card', {'seleccionada' : seleccionada})} onClick={this.seleccionarCarta} >
        <div className="text"><b>{name}</b></div>
        <img className="image" alt="card" src={require('./inte.jpg')} />
        {showingInfo? <div className="year">{year}</div> : <div className="year">¿?</div>}
      </div>
    )
  }
}

export default Card
