import React from "react"
import classNames from 'classnames'
import PlayerHand from '../PlayerHand/PlayerHand'
import "./Player.css"

const Player = ({
    name,
    playerHand,
    turn = false
  }) => (
    <div className={classNames('player', { turn: turn })}>
    <table>
        <tr>
            <th>
            <table>
                <tr>
                    <th><div className="name"><b>{name}</b></div></th>
                </tr>
                <tr> 
                    <th><img className="image" src={require('./user.png')} /></th>
                </tr>
            </table> 
            </th>
        <th><div className="playerHand"><PlayerHand cards={playerHand} turn= {turn}/></div> </th>
        </tr>
    </table>
    </div>
  )
  
  export default Player
