import { combineReducers } from 'redux';

import { IPackageReducerConfig } from '../Models';

export default (reducers: IPackageReducerConfig) =>
  combineReducers({
    ...reducers,
  });
