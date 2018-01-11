import { spawn, all } from 'redux-saga/effects';
import { watchNodes } from './nodes';

export default function* rootSaga() {
  yield all([
    spawn(watchNodes),
  ]);
}
