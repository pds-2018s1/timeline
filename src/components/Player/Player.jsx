import React from "react"
import classNames from 'classnames'
import PlayerHand from '../PlayerHand/PlayerHand'
import PlayerPhoto from '../PlayerPhoto/PlayerPhoto'
import "./Player.css"

const Player = ({
    name,
    playerHand,
    turn = false,
    showPhoto
  }) => (
    <div className={classNames('player', { turn: turn })}>
    <table>
        <tr>
            <th>
            <table>
                <tr>
                    <th><div className="name"><b>{name}</b></div></th>
                </tr>
                {
                    showPhoto && 
                    <tr> 
                        <th><PlayerPhoto /></th>
                    </tr>
                }
            </table> 
            </th>
        <th><div className="playerHand"><PlayerHand cards={playerHand} turn= {turn}/></div> </th>
        </tr>
    </table>
    </div>
  )
  
  export default Player
