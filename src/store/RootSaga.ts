import {all, fork} from 'redux-saga/effects';
import balanceSaga from './balance/saga';

const sagas = [...balanceSaga];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
