import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../ducks';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(thunkMiddleware, sagaMiddleware));

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
