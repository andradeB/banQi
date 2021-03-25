import {TypedUseSelectorHook, useSelector as selector} from 'react-redux';
import {select as sagaSelect} from 'redux-saga/effects';
import rootReducer from 'store/RootReducer';

type RootState = ReturnType<typeof rootReducer>;

export const useAppSelector: TypedUseSelectorHook<RootState> = selector;
export const select: TypedUseSelectorHook<RootState> = sagaSelect;
