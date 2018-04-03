import React from "react"

import "./PlayerHand.css"
import Card from "../Card/Card"

const PlayerHand = ({ 
    cards
  }) => (
    <div className="lista">
        {
            cards.map(card => <Card fact= {card.fact} showingInfo = {false}/>)
        }
    </div>
  )
  
  export default PlayerHand
