import React from "react"
import classNames from 'classnames'
import "./Deck.css"

const Deck = ({ 
    quantity
  }) => (
    <div className="deck">
      <div className="number"><b>{quantity}</b></div>
      
      <img className="image" src={require('./inte.jpg')} />

    </div>
  )
  
  export default Deck
