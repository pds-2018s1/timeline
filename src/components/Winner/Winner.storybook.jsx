import React from 'react'
import { storiesOf } from '@storybook/react'

import Winner from './Winner'

storiesOf('Winner', module).add('Ganador llamado Juan', () => {
  const name = 'Juan'

  return <Winner name={name} />
})
