import React from 'react'
import "./Timeline.css"
import Card from '../../containers/Card'
import TimelineSlot from '../../containers/TimelineSlot';

const Timeline = ({ playedCards }) => (
  <div className="playedCards" id="playedCards">
    <TimelineSlot />
    {
      playedCards.map(
        card =>
          <div key={card._id} className="cardAndSlot">
            <div ><Card card={card} showingInfo={true} /></div>
            <TimelineSlot prevCard={card} />
          </div>
      )
    }
  </div>
)

export default Timeline