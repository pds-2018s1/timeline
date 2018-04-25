import React from 'react'
import './TimelineSlot.css'

const onCardPlaced = (prevCard, nextCard, cardPlacedInTimeline, selectedCard, cardRejectedFromTimeline) => {
  if (selectedCard) {
    const year = selectedCard.fact.year
    const prevYear = prevCard ? prevCard.fact.year : Number.NEGATIVE_INFINITY
    const nextYear = nextCard ? nextCard.fact.year : Number.POSITIVE_INFINITY
    if (prevYear < year && nextYear > year) {
      cardPlacedInTimeline(nextCard)
    } else {
      cardRejectedFromTimeline()
    }
  }

}

const TimelineSlot = ({
  prevCard,
  nextCard,
  cardPlacedInTimeline,
  cardRejectedFromTimeline,
  selectedCard
}) => (
    <div className="timelineSlot"
      onClick={() => { onCardPlaced(prevCard, nextCard, cardPlacedInTimeline, selectedCard, cardRejectedFromTimeline) }}>
      Slot
  </div>
  )

export default TimelineSlot