import { Saga } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

export default (sagas: Saga[]) =>
  function* rootSaga() {
    const forks = sagas.map((saga) => fork(saga));
    yield all(forks);
  };
