import { createStore } from 'redux'

import {game as reducer} from './reducers/game'

export default function() {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}