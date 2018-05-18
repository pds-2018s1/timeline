import React from 'react'
import "./Opponent.css"

const Opponent = ({name, playerHand}) => (
 
    <div className="opponent">
        <div className="opponentName">{name}</div>
        <div className="opponentCards">
            {
                playerHand.map(card => <div>{card.name}</div>)
            }
        </div>
    </div>
)

export default Opponent