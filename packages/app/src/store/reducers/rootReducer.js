import { DemoReducer } from 'cra-ts-styled-boilerplate-demo';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import configReducer from './config';

const combinedReducer = combineReducers({
  config: configReducer,
  demoExampleApp: DemoReducer,
});

export const persistConfig = {
  key: 'appState',
  storage,
};

export default persistReducer(persistConfig, combinedReducer);
