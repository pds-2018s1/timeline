import React from 'react';
import { storiesOf } from '@storybook/react';

import Winner from "./Winner"
import storeCreator from "../../storeCreator"
import { Provider } from 'react-redux'

storiesOf('Winner', module)

  .add('Ganador llamado Juan', () => {
    const name = "Juan"
    
    return <Winner name = {name}/>
  })





