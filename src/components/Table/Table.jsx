import React from 'react'

import Timeline from '../Timeline/Timeline'
import Player from '../Player/Player'
import Deck from '../Deck/Deck'
import Opponents from '../Opponents/Opponents'
import './Table.css'

const Table = ({player, opponents, timeline, deck}) => (
 
    <div className="gameTable">
        <div className="leftPanel">
            <div className="topPanel">
                <Opponents opponents={opponents} />
            </div>
            <div className="middlePanel">
                <Timeline playedCards={timeline.playedCards}/>
            </div>
            <div className="bottomPanel">
                <Player name={player.name} playerHand={player.playerHand} showPhoto="true" />
            </div>
        </div>
        <div className="rightPanel">
            <Deck quantity={deck.quantity}/>
        </div>
    </div>
)
export default Table