import React from 'react'

import Timeline from '../Timeline/Timeline'
import PlayerHand from '../PlayerHand/PlayerHand'

const Table = ({timeline, playerHand}) => {
 
    return <div className="gameTable">
            <Timeline playedCards={timeline.playedCards}/>
            <PlayerHand cards={playerHand} />
        </div>
}
export default Table