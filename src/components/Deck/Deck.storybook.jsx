import React from 'react';
import { storiesOf } from '@storybook/react';

import Deck from "./Deck"

storiesOf('Deck', module)

  .add('deck con 50 cartas', () => {
    const number = 50
    return <Deck quantity={number} />
  })
