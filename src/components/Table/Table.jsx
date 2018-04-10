import React from 'react'

import Timeline from '../Timeline/Timeline'
import Player from '../Player/Player'
import Deck from '../Deck/Deck'

const Table = ({players, timeline, deck}) => {
 
    return <div className="gameTable">
            <Timeline playedCards={timeline.playedCards}/>
            {players.map(player => <Player name = {player.name} playerHand = {player.playerHand}/>)}
            <Deck quantity={deck.quantity}/>
        </div>
}
export default Table