import React from 'react'
import Player from '../Player/Player'
import "./Opponents.css"

const Opponents = ({opponents}) => (
    <div className="opponents">
        {opponents.map( 
            o => <Player name={o.name} playerHand={o.playerHand} /> 
        )}
    </div>
)

export default Opponents
     
