import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReactotronConfig from 'config/reactotron';
import rootReducer from './RootReducer';
import mySaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware();

const getEnhancer = () => {
  if (__DEV__ && ReactotronConfig?.createEnhancer) {
    return compose(
      ReactotronConfig.createEnhancer(),
      applyMiddleware(sagaMiddleware),
    );
  }

  return applyMiddleware(sagaMiddleware);
};

export default () => {
  const enhancer = getEnhancer();
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(mySaga);

  return {store};
};
