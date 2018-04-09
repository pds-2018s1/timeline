import React from 'react'

import Timeline from '../Timeline/Timeline'
import Player from '../Player/Player'

const Table = ({players, timeline}) => {
 
    return <div className="gameTable">
            <Timeline playedCards={timeline.playedCards}/>
            {players.map(player => <Player name = {player.name} playerHand = {player.playerHand}/>)}
            
        </div>
}
export default Table