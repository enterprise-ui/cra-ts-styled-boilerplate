import { fork } from 'redux-saga/effects';

import { asyncSaga } from './asyncSaga';

export default function* rootSaga() {
  yield fork(asyncSaga);
}
