import React from 'react'
import './TimelineSlot.css'

const onCardPlaced = (prevCard, nextCard, cardPlacedInTimeline) => {
  console.log(prevCard)
  console.log(nextCard)
  //TODO validar si se puede agregar la carta
  cardPlacedInTimeline()
}

const TimelineSlot = ({prevCard, nextCard, cardPlacedInTimeline}) => (
  <div className="timelineSlot" onClick={ () => {onCardPlaced(prevCard, nextCard, cardPlacedInTimeline)}}>
    Slot
  </div>
)

export default TimelineSlot