import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_CHK_AUTH, RECEIVE_CHK_AUTH, FAILED_CHK_AUTH } from '../actions/auth';
import { getApiUrl } from '../api';

export default function* watchAuth() {
  yield takeLatest(REQUEST_CHK_AUTH, receiveGetAuth);
}

export function* receiveGetAuth() {
  try {
    const response = yield call(axios.get, `${ getApiUrl() }/v2/auth/info`, { withCredentials: true });
    yield put({ type: RECEIVE_CHK_AUTH, authicated: false, response: response.data });
  } catch (e) {
    yield put({ type: FAILED_CHK_AUTH, e });
  }
}
