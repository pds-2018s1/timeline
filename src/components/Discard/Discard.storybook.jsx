import React from 'react'
import { storiesOf } from '@storybook/react'

import Discard from './Discard'

storiesOf('Discard', module).add('Discard con 50 cartas', () => {
  const number = 50
  return <Discard quantity={number} />
})
