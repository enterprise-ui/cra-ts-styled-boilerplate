import { DemoSagas } from 'cra-ts-styled-boilerplate-demo';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(DemoSagas);
}
