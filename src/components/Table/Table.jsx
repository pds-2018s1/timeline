import React from 'react'

import Timeline from '../Timeline/Timeline'
import Player from '../Player/Player'
import Deck from '../../containers/Deck'
import Opponents from '../Opponents/Opponents'
import './Table.css'
import Discard from '../../containers/Discard'

const Table = ({ player, opponents, timeline, deck, turn }) => (

  <div className="gameTable">
    <div className="leftPanel">
      <div className="leftPanelGrid">
        {/* <div className="topmostPanel">
          <span>Turno de {turn}</span>
        </div> */}
        {/* <hr></hr> */}
        <div className="topPanel">
          <Opponents opponents={opponents} />
        </div>
          <div className="middlePanel">
            <Timeline playedCards={timeline} />
          </div>
          <div className="bottomPanel">
            <Player name={player.name} playerHand={player.playerHand} showPhoto="true" />
          </div>
      </div>
    </div>
    <div className="rightPanel">
      <div className="rightPanelComponents">
        <Deck />
        <Discard />
      </div>
    </div>
  </div>
)
export default Table