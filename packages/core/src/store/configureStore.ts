import { IStore } from 'cra-ts-styled-boilerplate-core';
import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware, { Saga } from 'redux-saga';
import thunk from 'redux-thunk';

import { IPersistedStore, IStaticProps } from '../Models';

const hmrDefaultOptions = {
  persistConfig: {
    key: 'appState',
    storage,
  },
  reducerPath: './reducers/rootReducer',
};

export default <TState = any>(
  rootReducer: Reducer,
  {isServer = false}: IStaticProps,
  state?: TState,
  sagas?: Saga,
  hmrOptions = hmrDefaultOptions,
): IPersistedStore => {
  const middlewares: Middleware[] = [thunk];
  let sagaMiddleware = null;

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  if (sagas) {
    sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);
  }

  const store: IStore = createStore(rootReducer, state, applyMiddleware(...middlewares));
  const persistor = persistStore(store);

  if (sagas) {
    store.sagaTask = sagaMiddleware?.run(sagas);
  }

  if (!isServer && module.hot) {
    module.hot.accept(hmrOptions.reducerPath, () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(persistReducer(hmrOptions.persistConfig, nextRootReducer));
    });
  }

  return {
    store,
    persistor,
  };
};
