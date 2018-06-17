import { createStore, applyMiddleware, compose } from 'redux'

import { game as reducer } from './reducers/game'
import thunk from 'redux-thunk'

//Hack to avoid passing undefined to compose and making cypress tests to fail
let devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
if (!devtools) {
  devtools = a => a
}

export default function() {
  return createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
      devtools
    )
  )
}
