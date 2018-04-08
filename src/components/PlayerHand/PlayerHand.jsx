import React from "react"

import "./PlayerHand.css"
import Card from "../Card/Card"

const PlayerHand = ({ 
    cards,
    turn
  }) => (
    <div className="lista">
        {
            cards.map(card => <Card fact= {card.fact} showingInfo = {false} seleccionable={turn}/>)
        }
    </div>
  )
  
  export default PlayerHand
