import { createStore, applyMiddleware, compose } from 'redux'

import {game as reducer} from './reducers/game'
import thunk from 'redux-thunk';

export default function() {
  return createStore(
    reducer,
    compose( 
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}