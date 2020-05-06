import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer, { persistConfig } from './reducers/rootReducer';

export default (state) => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(rootReducer, state, applyMiddleware(...middlewares));
  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = rootReducer;
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }

  return {
    store,
    persistor,
  };
};
