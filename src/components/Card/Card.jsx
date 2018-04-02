import React from "react"

import "./Card.css"

const Card = ({ 
    fact: {name, year}, 
    showingInfo
  }) => (
    <div className="card" >
      <div>{name}</div>
      <div className="year">{year}</div>
    </div>
  )
  
  export default Card
