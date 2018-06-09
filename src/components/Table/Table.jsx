import React from 'react'

import Timeline from '../Timeline/Timeline'
import Player from '../Player/Player'
import Deck from '../../containers/Deck'
import Opponents from '../Opponents/Opponents'
import './Table.css'
import Discard from '../../containers/Discard'

const Table = ({ player, opponents, timeline}) => (

  <div className="gameTable" id="gameTable">
    <div className="leftPanel">
      <div className="leftPanelGrid">
        <div className="topPanel">
          <Opponents opponents={opponents} />
        </div>
          <div className="middlePanel" id="gameTimeline">
            <Timeline playedCards={timeline} />
          </div>
          <div className="bottomPanel" id="playerHand">
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