import { spawn, all } from 'redux-saga/effects';
import watchNodes from './nodes';
import watchAuth from './auth';

export default function* rootSaga() {
  yield all([
    spawn(watchNodes),
    spawn(watchAuth),
  ]);
}
