import { combineReducers } from 'redux';

import { IPackageReducerConfig } from '../models';

export default (reducers: IPackageReducerConfig) =>
  combineReducers({
    ...reducers,
  });
