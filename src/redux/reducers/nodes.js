import * as actions from '../actions/nodes';

const defaultState = {
  isFetching: false,
  data: {},
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case actions.REQUEST_GET_NODES:
      return {
        ...state,
        isFetching: true,
      };
    case actions.RECEIVE_GET_NODES:
      return {
        ...state,
        isFetching: false,
        data: action.response,
      };
    default:
      return state;
  }
}
