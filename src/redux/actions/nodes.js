export const REQUEST_GET_NODES = 'nodes/request';
export const requestGetNodes = () => ({ type: REQUEST_GET_NODES });

export const RECEIVE_GET_NODES = 'nodes/received';
export const receiveGetNodes = payload => ({ type: RECEIVE_GET_NODES, payload });

export const FAILED_GET_NODES = 'nodes/failed';
