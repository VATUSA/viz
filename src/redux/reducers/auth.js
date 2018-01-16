import * as actions from '../actions/auth';

const defaultState = {
  isFetching: false,
  isAuthenticated: false,
  hasChecked: false,
  data: {},
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case actions.REQUEST_CHK_AUTH:
      return {
        ...state,
        isFetching: true,
      };
    case actions.RECEIVE_CHK_AUTH:
      return {
        ...state,
        isFetching: false,
        hasChecked: true,
        isAuthenticated: true,
        data: action.response,
      };
    case actions.FAILED_CHK_AUTH:
      if (action.e.response.status === 401) {
        return {
          ...state,
          isFetching: false,
          hasChecked: true,
          isAuthenticated: false,
          data: {},
        };
      }
      return state;
    default:
      return state;
  }
}
