import React from 'react'
import { storiesOf } from '@storybook/react'
import Player from './Player'
import storeCreator from '../../storeCreator'
import { Provider } from 'react-redux'

storiesOf('Player', module)
  .addDecorator(story => <Provider store={storeCreator()}>{story()}</Provider>)
  .add('primera mano', () => {
    const name = 'persona x'
    const hand = [
      { fact: { name: 'a', year: 1200 } },
      { fact: { name: 'b', year: 1300 } },
      { fact: { name: 'c', year: 1400 } },
      { fact: { name: 'd', year: 1500 } },
      { fact: { name: 'e', year: 1600 } }
    ]
    return <Player name={name} playerHand={hand} showPhoto="true" />
  })

  .add('primera mano, toca jugar', () => {
    const name = 'persona x'
    const hand = [
      { fact: { name: 'a', year: 1200 } },
      { fact: { name: 'b', year: 1300 } },
      { fact: { name: 'c', year: 1400 } },
      { fact: { name: 'd', year: 1500 } },
      { fact: { name: 'e', year: 1600 } }
    ]
    const turn = true
    return <Player name={name} playerHand={hand} turn={turn} showPhoto="true" />
  })
