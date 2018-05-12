import React from 'react';
import { storiesOf } from '@storybook/react';
import CreateMatch from './CreateMatch';
import storeCreator from "../../storeCreator"
import { Provider } from 'react-redux'

storiesOf('CreateMatch', module)
  .addDecorator(story => <Provider store={storeCreator()}>{story()}</Provider>)

    .add('Create Match form', () => {
        return <CreateMatch />
    })
