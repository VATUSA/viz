import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nodes from './nodes';
import auth from './auth';

export default combineReducers({
  nodes,
  auth,
  routing: routerReducer,
});
