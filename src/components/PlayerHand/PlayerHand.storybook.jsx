import React from 'react';
import { storiesOf } from '@storybook/react';

import PlayerHand from "./PlayerHand"

storiesOf('PlayerHand', module)

  .add('lista de cartas', () => {
      return <PlayerHand cards={[
        { fact:{name: "a", year: 1200} },
        { fact:{name: "b", year: 1400} },
        { fact:{name: "c", year: 1400} },
        { fact:{name: "d", year: 1400} },
        { fact:{name: "e", year: 1400} }
      ]} />
  })



