import React from "react"
import classNames from 'classnames'
import "./Discard.css"

const Discard = ({ 
    quantity
  }) => (
    <div className="discard">
    <div className="text"> Descarte </div>
    <div className="discard">
    <img className="image" src={require('./discard.png')} />
      <div className="number"><b>{quantity}</b></div>
      
      

    </div>
    </div>
  )
  
  export default Discard
