import types from './types';
import actions from './action';
import {takeLatest, put} from 'redux-saga/effects';
import {UserBalance} from '../../models/UserBalance';
import db from '/src/data.json';

export function* fetchBalance() {
  const data = new UserBalance(db);
  yield put(actions.getUserBalanceDataSucess(data));
}

export function* watcher() {
  yield takeLatest(types.GET_DATA_REQUEST, fetchBalance);
}

export default [watcher];
