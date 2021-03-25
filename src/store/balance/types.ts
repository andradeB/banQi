import {Action} from 'redux';
import {UserBalance} from '../../models/UserBalance';

enum BALANCE_DATA_REDUCER_TYPES {
  GET_DATA_REQUEST = '@balance/GET_DATA_REQUEST',
  GET_DATA_SUCCESS = '@balance/GET_DATA_SUCCESS',
  GET_DATA_FAILURE = '@balance/GET_DATA_FAILURE',
}

export interface BalanceAction extends Action<BALANCE_DATA_REDUCER_TYPES> {
  payload?: UserBalance;
}

export default BALANCE_DATA_REDUCER_TYPES;
