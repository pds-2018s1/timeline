import React from "react"

import "./Card.css"

const Card = ({ 
    fact: {name, year}, 
    showingInfo
  }) => (
    <div className="card" >
      <div><b>{name}</b></div>
      
      <img className="image" src={require('./inte.jpg')} />

      { showingInfo &&   <div className="year">{year}</div> }
      { ! showingInfo &&   <div className="year">¿?</div> }
    </div>
  )
  
  export default Card
