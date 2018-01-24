// @flow
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import storage from 'redux-persist/lib/storage';
import {persistStore, persistCombineReducers} from 'redux-persist';
import reducers from 'app/general/reducers'; // as an Object
import type {Store} from 'app/general/types/Store';

const logger = createLogger({
  duration: true,
});

const configPersist = {
  key: 'root',
  storage,
};
const reducer = persistCombineReducers(configPersist, reducers);

const middlewares = [logger, thunk];
const middleware = applyMiddleware(...middlewares);

export default function configureStore(): Store {
  const store = createStore(reducer, middleware);
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
}
