export const REQUEST_CHK_AUTH = 'auth/check/request';
export const fetchAuth = () => ({ type: REQUEST_CHK_AUTH });

export const RECEIVE_CHK_AUTH = 'auth/check/received';
export const receiveAuth = payload => ({ type: RECEIVE_CHK_AUTH, payload });

export const FAILED_CHK_AUTH = 'auth/check/failed';
export const receiveAuthFailed = () => ({ type: FAILED_CHK_AUTH });
