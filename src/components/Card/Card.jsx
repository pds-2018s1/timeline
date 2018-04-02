import React from "react"

import "./Card.css"

const Card = ({ 
    fact: {name, year}, 
    showingInfo
  }) => (
    <div className="card" >
    <div className="container">
      <div><b>{name}</b></div>
      { showingInfo &&   <div className="year">{year}</div> }
      { ! showingInfo &&   <div className="year">¿?</div> }
      </div>
    </div>
  )
  
  export default Card
