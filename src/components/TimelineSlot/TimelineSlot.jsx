import React from 'react'
import './TimelineSlot.css'

const TimelineSlot = ({ prevCard, cardPlacedInTimeline }) => (
  <div
    className="timelineSlot"
    onClick={() => {
      cardPlacedInTimeline(prevCard)
    }}
  />
)

export default TimelineSlot
