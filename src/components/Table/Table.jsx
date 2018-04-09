import React from 'react'

import Timeline from '../Timeline/Timeline'
import Player from '../Player/Player'

const Table = ({timeline, playerHand}) => {
 
    return <div className="gameTable">
            <Timeline playedCards={timeline.playedCards}/>
            <Player name={'Persona Y'} playerHand={playerHand} />
        </div>
}
export default Table