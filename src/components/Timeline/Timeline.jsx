import React from 'react'
import "./Timeline.css"
import Card from '../../containers/Card' 
import TimelineSlot from '../../containers/TimelineSlot';

const resolveNextCard = (list, card) => {
  const index = list.indexOf(card)
  if( list.length === index + 1) return null
  return list[index + 1]
}

const Timeline = ({playedCards}) => (
        <div className="playedCards">
            <TimelineSlot nextCard={playedCards[0]} />
            {
                playedCards.map(
                  card => 
                    <div key={card.fact.name} className="cardAndSlot">
                      <div ><Card fact={card.fact} showingInfo={true}/></div>
                      <TimelineSlot prevCard={card} nextCard={resolveNextCard(playedCards, card)}/>
                    </div>
                )
            }
        </div>
    )

export default Timeline