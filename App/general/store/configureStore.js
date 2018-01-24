// @flow
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducers from 'app/general/reducers'; // as an Object
import type {Store} from 'app/general/types/Store';

const logger = createLogger({
  duration: true,
});

const middlewares = [logger, thunk];
const middleware = applyMiddleware(...middlewares);

export default function configureStore(): Store {
  return createStore(combineReducers(reducers), middleware);
}
