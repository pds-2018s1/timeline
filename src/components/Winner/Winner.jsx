import React from "react"
import PlayerPhoto from '../PlayerPhoto/PlayerPhoto'
import "./Winner.css"


const Winner = ({ name }) => (
<div className="container">
    <div className="winner" >
        Ganador:
        <div className="text"><b>{name}</b></div>
        <PlayerPhoto/>
      </div>
</div>

  
)

export default Winner
