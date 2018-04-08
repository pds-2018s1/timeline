import React from "react"
import classNames from 'classnames'
import "./Card.css"

const Card = ({ 
    fact: {name, year}, 
    showingInfo,
    seleccionable = false
  }) => (
    <div className={classNames('card', { seleccionable: seleccionable })}>
      <div className="text"><b>{name}</b></div>
      
      <img className="image" src={require('./inte.jpg')} />

      { showingInfo &&   <div className="year">{year}</div> }
      { ! showingInfo &&   <div className="year">¿?</div> }
    </div>
  )
  
  export default Card
