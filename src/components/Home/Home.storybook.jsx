import React from 'react';
import { storiesOf } from '@storybook/react';
import Home from './Home';
import storeCreator from "../../storeCreator"
import { Provider } from 'react-redux'

storiesOf('Home', module)
  .addDecorator(story => <Provider store={storeCreator()}>{story()}</Provider>)

    .add('Home page', () => {
        return <Home name={"Cornelio"}/>
    })
