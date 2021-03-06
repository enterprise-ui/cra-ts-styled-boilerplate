import { delay, put, takeEvery } from 'redux-saga/effects';

import { ASYNC_REDUX_SAGA_TEXT, GET_DATA_BEGIN, GET_DATA_SUCCESS } from './constants/config';

function* getData() {
  yield delay(2000);

  yield put({
    type: GET_DATA_SUCCESS,
    data: ASYNC_REDUX_SAGA_TEXT,
  });
}

function* asyncSaga() {
  yield takeEvery(GET_DATA_BEGIN, getData);
}

export {asyncSaga};
