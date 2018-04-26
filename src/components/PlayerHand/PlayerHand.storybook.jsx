import React from 'react';
import { storiesOf } from '@storybook/react';
import PlayerHand from "./PlayerHand"
import storeCreator from "../../storeCreator"
import { Provider } from 'react-redux'

storiesOf('PlayerHand', module)
  .addDecorator(story => <Provider store={storeCreator()}>{story()}</Provider>)
  .add('lista de cartas', () => {
      return <PlayerHand cards={[
        { fact:{name: "a", year: 1200} },
        { fact:{name: "b", year: 1400} },
        { fact:{name: "c", year: 1400} },
        { fact:{name: "d", year: 1400} },
        { fact:{name: "e", year: 1400} }
      ]} />
  })



