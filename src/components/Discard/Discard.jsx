import React from "react"
import "./Discard.css"

const Discard = ({ quantity }) => (
  <div className="discard">
    <div className="text"> Descarte </div>
    <div className="discard">
      <img className="image" alt="discard" src={require('./discard.png')} />
      <div className="number"><b>{quantity}</b></div>
    </div>
  </div>
)

export default Discard
