import { fork, all } from 'redux-saga/effects';
import * as nodeSagas from './nodes';

export default function* rootSaga() {
  yield all([
    ...Object.values(nodeSagas),
  ].map(fork));
}
