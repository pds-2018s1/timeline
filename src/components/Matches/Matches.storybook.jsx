import React from 'react'
import { storiesOf } from '@storybook/react'
import Matches from './Matches'
import storeCreator from '../../storeCreator'
import { Provider } from 'react-redux'

storiesOf('Matches', module)
  .addDecorator(story => <Provider store={storeCreator()}>{story()}</Provider>)

  .add('Empty matches page', () => {
    return <Matches matches={[]} />
  })

  .add('Full matches page', () => {
    const matches = [
      { id: 1, name: 'partida 1', size: 3 },
      { id: 2, name: 'partida 2', size: 4 },
      { id: 3, name: 'partida 3', size: 5 },
      { id: 4, name: 'partida 4', size: 8 },
      { id: 5, name: 'partida 5', size: 2 },
      { id: 6, name: 'partida 6', size: 5 },
      { id: 7, name: 'partida 7', size: 2 },
      { id: 8, name: 'partida 8', size: 4 },
      { id: 9, name: 'partida 9', size: 5 },
      { id: 10, name: 'partida 10', size: 5 },
      { id: 11, name: 'partida 11', size: 8 },
      { id: 12, name: 'partida 12', size: 6 },
      { id: 13, name: 'partida 13', size: 3 },
      { id: 14, name: 'partida 14', size: 7 },
      { id: 15, name: 'partida 15', size: 5 }
    ]
    return <Matches matches={matches} />
  })
