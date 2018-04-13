import React from 'react'
import Opponent from '../Opponent/Opponent'
import "./Opponents.css"


const Opponents = ({opponents}) => (
    <div className="opponents">
        {opponents.map( 
            o => <Opponent name={o.name} playerHand={o.playerHand} /> 
        )}
    </div>
)

export default Opponents
     
