import types, {BalanceAction} from './types';
import {UserBalance} from 'models/UserBalance';

type Action = {
  getUserBalanceDataRequest: () => BalanceAction;
  getUserBalanceDataSucess: (payload: UserBalance) => BalanceAction;
  getUserBalanceFailure: () => BalanceAction;
};

const actions: Action = {
  getUserBalanceDataRequest: () => ({
    type: types.GET_DATA_REQUEST,
  }),
  getUserBalanceDataSucess: (payload) => ({
    type: types.GET_DATA_SUCCESS,
    payload,
  }),
  getUserBalanceFailure: () => ({
    type: types.GET_DATA_FAILURE,
  }),
};

export default actions;
