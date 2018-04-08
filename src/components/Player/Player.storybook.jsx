import React from 'react';
import { storiesOf } from '@storybook/react';
import PlayerHand from "../PlayerHand/PlayerHand"
import Player from "./Player"

storiesOf('Player', module)

  .add('primera mano', () => {
    const name = "persona x"
    const hand = [ 
        { fact:{name: "a", year: 1200} },
        { fact:{name: "b", year: 1300} },
        { fact:{name: "c", year: 1400} },
        { fact:{name: "d", year: 1500} },
        { fact:{name: "e", year: 1600} }
    ]
    return <Player name = {name} playerHand = {hand} />
  })



