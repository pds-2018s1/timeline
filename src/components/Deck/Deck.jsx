import React from 'react'
import './Deck.css'

const Deck = ({ quantity }) => (
  <div className="deck">
    <div className="text"> Mazo </div>
    <div className="deck">
      <div className="number">
        <b>{quantity}</b>
      </div>
      <img className="image" alt="deck" src={require('./inte.jpg')} />
    </div>
  </div>
)

export default Deck
