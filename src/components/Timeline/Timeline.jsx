import React from 'react'
import "./Timeline.css"
import Card from '../../containers/Card' 
import TimelineSlot from '../../containers/TimelineSlot';

const Timeline = ({playedCards}) => (
        <div className="playedCards">
            <TimelineSlot/>
            {
                playedCards.map(
                  card => 
                    <div key={card.fact.name} className="cardAndSlot">
                      <div ><Card fact={card.fact} showingInfo={true}/></div>
                      <TimelineSlot prevCard={card}/>
                    </div>
                )
            }
        </div>
    )

export default Timeline