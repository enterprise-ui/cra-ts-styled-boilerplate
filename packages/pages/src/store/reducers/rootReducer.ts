import { combineReducers } from 'redux';

import configReducer from './config';

const combinedReducer = combineReducers({
  config: configReducer,
});

export default combinedReducer;
