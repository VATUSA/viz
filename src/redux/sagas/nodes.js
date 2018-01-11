import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_GET_NODES, RECEIVE_GET_NODES, FAILED_GET_NODES } from '../actions/nodes';
import getUrl from '../api';

export default function* watchNodes() {
  yield takeLatest(REQUEST_GET_NODES, receiveGetNodes);
}

export function* receiveGetNodes() {
  try {
    const response = yield call(axios.get, `${ getUrl() }/nodes`);
    yield put({ type: RECEIVE_GET_NODES, response: response.data });
  } catch (e) {
    console.dir(e);
    yield put({ type: FAILED_GET_NODES, e });
  }
}
