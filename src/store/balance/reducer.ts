import {Action, Reducer} from 'redux';
import {UserBalance} from '../../models/UserBalance';
import types, {BalanceAction} from './types';
import {BaseState} from 'models/store/BaseState';

type BalanceState = BaseState<UserBalance>;

const INITIAL_STATE: BalanceState = {
  error: false,
  loading: false,
};

const stateControl: Reducer<BalanceState, BalanceAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      } as BalanceState;
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default stateControl;
