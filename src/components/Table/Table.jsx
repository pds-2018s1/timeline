import React from 'react'

import Timeline from '../Timeline/Timeline'
import Player from '../Player/Player'
import Deck from '../Deck/Deck'
import Opponents from '../Opponents/Opponents'
import './Table.css'
import Discard from '../Discard/Discard';

const  Table = ({player, opponents, timeline, deck}) => (
 
    <div className="gameTable">
         
        <div className="leftPanel">
            <div className="topmostPanel">
                <span>Turno de ...</span>
            </div>
            <hr></hr>
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
            <Discard quantity={0}/>
        </div>
    </div>
)
export default Table